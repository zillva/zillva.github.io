import requests
from bs4 import BeautifulSoup
import openpyxl

URL = "https://www.fjordkraft.no/strom/strompriser/historiske-strompriser/"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")

results = soup.find(Class="TableItemWrapper")

print(results.prettify)