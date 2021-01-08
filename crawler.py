#!/usr/bin/env python
import urllib.request
from bs4 import BeautifulSoup

fp = urllib.request.urlopen("https://student.uit.edu.vn/thongbao/mot-so-quy-trinh-danh-cho-sinh-vien")
mybytes = fp.read()

mystr = mybytes.decode("utf8")
fp.close()

cleantext = BeautifulSoup(mystr, "lxml").text
cleantext = cleantext.replace('\n',' ')
cleantext = " ".join(cleantext.split())
print(cleantext)
file1 = open("crawlData.txt","a") 
file1.write(cleantext)
file1.close() 