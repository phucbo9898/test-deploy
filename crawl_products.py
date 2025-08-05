import requests
from bs4 import BeautifulSoup
import json

def crawl_products_to_json(base_url, max_pages=1, output_file='products.json'):
    products = []
    for page in range(1, max_pages + 1):
        url = f"{base_url}"
        print(f"Crawling {url}")
        response = requests.get(base_url)
        if response.status_code != 200:
            print(f"Failed to retrieve page {page}")
            break  # Stop if page not found (end of pagination)
        
        soup = BeautifulSoup(response.content, 'html.parser')
        product_elements = soup.select('div.product-small.box')
        if not product_elements:
            print(f"No products found on page {page}, stopping crawl.")
            break  # Stop if no products on page (end of pagination)

        for product in product_elements:
            category = product.select_one('div.title-wrapper p.category')
            price_elem = product.select_one('span.woocommerce-Price-amount')
            link_elem = product.select_one('a.woocommerce-LoopProduct-link')

            title = link_elem.text.strip() if link_elem else 'N/A'
            price = price_elem.text.strip() if price_elem else 'N/A'
            link = link_elem['href'] if link_elem else 'N/A'
            category = category.text.strip() if category else 'N/A'

            products.append({
                'category': category,
                'title': title,
                'price': price,
                'link': link
            })

    # Export to JSON file
    with open(output_file, 'w', encoding='utf-8') as json_file:
        json.dump(products, json_file, ensure_ascii=False, indent=4)

    print(f"Exported {len(products)} products to {output_file}")

# Run the crawler
if __name__ == "__main__":
    crawl_products_to_json('https://kenhxachtayduc.com/shop/', max_pages=28, output_file='products.json')
