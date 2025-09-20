import sys
import os
import csv
from urllib.parse import urljoin
import requests
from requests.adapters import HTTPAdapter
from urllib3.util import Retry
from bs4 import BeautifulSoup
import random

#user agents to rotate
Headers=[{
                'Connection' : "keep-alive",
                'X-Forwarded-Proto': "https",
                'sec-ch-ua': '"Chromium";v="134", "Not=A?Brand";v="24", "Google Chrome";v="134"',
                'sec-ch-ua-mobile' : '?0',
                'sec-ch-ua-platform': "Windows",
                'upgrade-insecure-requests': "1",
                'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36',
                'Content-Type' : "application/json",
                'Sec-Fetch-Site' : "same-origin",
                'Accept-Encoding' : 'gzip, deflate, br, zstd'
            },

            {
                'Connection' : 'keep-alive',
                'Sec-CH-UA' : '"Chromium";v="125", "Google Chrome";v="125", "Not=A?Brand";v="99"',
                'sec-ch-ua-mobile' : '?0',
                'sec-ch-ua-platform': "macOS",
                'User-Agent' : 'Mozilla/5.0 (Macintosh; Intel Mac OS X 15_6_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
                'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Sec-Fetch-Site' : 'none',
                'Sec-Fetch-Mode' : 'navigate',
                'Accept-Language' : 'en-US,en;q=0.9',
                'Accept-Encoding' : 'gzip, deflate, br, zstd'
            },

            {
                'Connection' : 'keep-alive',
                'sec-ch-ua': '"Chromium";v="140", "Not=A?Brand";v="24", "Brave";v="140"',
                'sec-ch-ua-mobile' : '?0',
                'sec-ch-ua-platform' : "Windows",
                'Upgrade-Insecure-Requests' : '1',
                'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
                'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Sec-GPC' : '1',
                'Accept-Language' : 'en-US,en;q=0.9',
                'Sec-Fetch-Site' : 'none',
                'Sec-Fetch-Mode' : 'navigate',
                'Sec-Fetch-User' : '?1',
                'Sec-Fetch-Dest' : 'document',
                'Accept-Encoding' : 'gzip, deflate, br, zstd'
            },

            {
                'Connection' : 'keep-alive',
                'sec-ch-ua' : '"Chromium";v="140", "Not=A?Brand";v="24", "Google Chrome";v="140"',
                'sec-ch-ua-mobile' : '?0',
                'sec-ch-ua-platform' : "Windows",
                'Upgrade-Insecure-Requests' : '1',
                'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36',
                'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Sec-Fetch-Site' : 'none',
                'Sec-Fetch-Mode' : 'navigate',
                'Sec-Fetch-User' : '?1',
                'Sec-Fetch-Dest' : 'document',
                'Accept-Encoding' : 'gzip, deflate, br, zstd',
                'Accept-Language' : 'en-US,en;q=0.9'
            },

            {
                'Connection' : 'keep-alive',
                'sec-ch-ua' : '"Chromium";v="140", "Not=A?Brand";v="24", "Microsoft Edge";v="140"',
                'sec-ch-ua-mobile' : '?0',
                'sec-ch-ua-platform' : "Windows",
                'Upgrade-Insecure-Requests' : '1',
                'User-Agent' : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/140.0.0.0 Safari/537.36 Edg/140.0.0.0',
                'Accept' : 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Sec-Fetch-Site' : 'none',
                'Sec-Fetch-Mode' : 'navigate',
                'Sec-Fetch-User' : '?1',
                'Sec-Fetch-Dest' : 'document',
                'Accept-Encoding' : 'gzip, deflate, br, zstd',
                'Accept-Language' : 'en-US,en;q=0.9'
            }
]

# Add local paperscraper source to path
sys.path.insert(0, r'd:\\Documents\\scrape_pdf\\paperscraper-main')

from paperscraper.pdf import save_pdf

# Read CSV file
input_csv = r'E:\\User\\My Documents\\scrape_pdf\\SB_publication_PMC.csv'
output_dir = r'E:\\User\\My Documents\\scrape_pdf\\downloaded_pdfs'

# Create output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Process each row in the CSV
with open(input_csv, newline='', encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        title = row['Title']  # Fixed case
        url = row['Link']  # Fixed case
        
        # Extract PMC ID from URL
        if 'pmc/articles/PMC' in url:
            pmc_id = url.split('/')[-2] if url.endswith('/') else url.split('/')[-1]
            pmc_id = pmc_id.replace('PMC', '')
            
            # Create filename from title (safe for filesystem)
            safe_title = ''.join(c if c.isalnum() or c in ' _-' else '' for c in title)[:150]
            filename = f"{safe_title}_{pmc_id}.pdf"
            output_path = os.path.join(output_dir, filename)
            
            print(f"Downloading: {title}")
            
            try:
                # Fetch the article page
                article_url = f"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC{pmc_id}/"
                session = requests.Session()
                retry_strategy = Retry(
                    total=3,
                    status_forcelist=[429, 500, 502, 503, 504],
                    allowed_methods=["GET"]
                )
                adapter = HTTPAdapter(max_retries=retry_strategy)
                session.mount("https://", adapter)
                session.mount("http://", adapter)
                headers = {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3'
                }

                try:
                    # Get the article page
                    response = session.get(article_url, headers=random.choice(Headers))
                    response.raise_for_status()
                    
                    # Parse the HTML to find the PDF link
                    soup = BeautifulSoup(response.text, 'lxml')
                    
                    # Extract DOI
                    doi = None
                    meta_tags = soup.find_all('meta')
                    for tag in meta_tags:
                        if 'name' in tag.attrs and tag.attrs['name'].lower() == 'citation_doi':
                            doi = tag.attrs['content']
                            break
                    
                    if not doi:
                        print(f"DOI not found for {title}")
                        continue
                    
                    # Use paperscraper to download the PDF by DOI
                    paper_data = {'doi': doi}
                    save_pdf(paper_data, output_path)
                    
                    print(f"Saved to: {output_path}")
                except Exception as e:
                    print(f"Failed to download {title}: {str(e)}")
            except Exception as e:
                print(f"Failed to download {title}: {str(e)}")
