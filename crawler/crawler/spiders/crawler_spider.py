from scrapy import Spider
from scrapy.selector import Selector
from crawler.items import CrawlerItem

class CrawlerSpider(Spider):
    name = "crawler"
    allowed_domains = ["student.uit.edu.vn"]
    start_urls = [
        "https://student.uit.edu.vn/thongbao/mot-so-quy-trinh-danh-cho-sinh-vien",
    ]

    def parse(self, response):
        questions = Selector(response).xpath('//div[@class="content"]/')
        # for question in questions:
        # item = CrawlerItem()

        # #     item['Data'] = question.xpath(
        # #         'div[@class="field-item even"]/div/p/').extract_first()
        # item['Data'] = questions
        # yield item

        # item = CrawlerItem()
        # item['Data'] = (u'questions is')
        # yield item