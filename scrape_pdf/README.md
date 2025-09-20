# PDF Downloader from PMC

This script downloads PDFs from PubMed Central (PMC) using a list of article URLs provided in a CSV file.

## Requirements

- Python 3.x
- Packages listed in `requirements.txt`

## Installation

```bash
pip install -r requirements.txt
```

## Usage

1. Prepare a CSV file with two columns: 'Title' and 'Link'. Each row should contain an article title and its PMC URL.
2. Place the CSV file in the project directory (default: `SB_publication_PMC.csv`).
3. Run the script:
   ```bash
   python download_pdfs.py
   ```
4. Downloaded PDFs will be saved in the `downloaded_pdfs` directory.

## Notes

- The script uses the DOI extracted from the PMC article page to download the PDF via the `paperscraper` library.
- If the DOI cannot be found, the article will be skipped.
