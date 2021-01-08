#!/usr/bin/env python
from underthesea import sent_tokenize
from underthesea import word_tokenize
import json

# file1 = open("crawlData.txt","r") 

# text_doc = file1.read()
# sentences = sent_tokenize(text_doc)

# import spacy
# nlp = spacy.load('vi_spacy_model')

# from spacy.matcher import Matcher
# matcher = Matcher(nlp.vocab)

# searchContent = 'thi kết thúc học phần'
# searchArray = word_tokenize(searchContent)

# for searchPhase in searchArray:
#     print(word_tokenize(searchPhase, format="text"))
#     phrases = [{'LOWER':word_tokenize(searchPhase, format="text")}]
#     matcher.add('searchResult', None, phrases)

# results = []
# data_set = {}

# for idx, sent in enumerate(sentences):
#     doc_sentence = nlp(sent)
#     matches = matcher(doc_sentence)
#     if(len(matches)>2):
#         # print(matches,doc_sentence)
#         # result.append(matches)
#         # data_set[idx] = len(matches)
#         results.append({"sentence": {"content": doc_sentence, "matches": matches}})

# # json_dump = json.dumps(data_set)
# # print(json_dump)
# results = sorted(results, key=lambda k: len(k['sentence'].get('matches')), reverse=True)
# for result in results:
#     print(result, '\n')


file1 = open("crawlData.txt","r") 

text_doc = file1.read()
sentences = sent_tokenize(text_doc)
file1.close()
    
import spacy
nlp = spacy.load('vi_spacy_model')

# -- remove stop word 
file_stop = open("vietnamese_stopword.txt","r") 
def content_fraction(word):
    checkWord = word
    stopwords = file_stop.read()
    # content = [w for w in text if w.lower() not in stopwords]
    if(checkWord not in stopwords):
        return checkWord
    return ""

# -- function search 

def getContent(command, abso) :

    from spacy.matcher import Matcher
    matcher = Matcher(nlp.vocab)

    searchContent = command
    searchArray = word_tokenize(searchContent)

    for searchPhase in searchArray:
        rightKey = content_fraction(word_tokenize(searchPhase, format="text"))
        print(rightKey)
        if(rightKey != ""):
            phrases = [{'LOWER':rightKey}]
            matcher.add("", None, phrases)

    results = []

    if(abso == "prod"):
        for idx, sent in enumerate(sentences):
            doc_sentence = nlp(sent)
            matches = matcher(doc_sentence)
            if(len(matches)>2):
                results.append({"sentence": {"content": doc_sentence, "matches": matches}})

    if(abso == "test") :
        for idx, sent in enumerate(sentences):
            doc_sentence = nlp(sent)
            matches = matcher(doc_sentence)
            results.append({"sentence": {"content": doc_sentence, "matches": matches}})
            
    results = sorted(results, key=lambda k: len(k["sentence"].get("matches")), reverse=True)
    finalSearch = ''
    for result in results :
        print(result)
        finalSearch = finalSearch + '\n' + ' -- ' + str(result['sentence'].get("content")) 
        # finalSearch.append(result['sentence'])
    return finalSearch

# --------- Web api 
from flask import Flask, request, json
from flask_cors import CORS
api = Flask(__name__)
CORS(api)

@api.route('/search', methods=['POST'])
def post_search():
    data = request.json
    command = data.get('command')
    abso = data.get('absolutely')
    print(command,abso)
    return (getContent(command,abso)), 200
    

if __name__ == '__main__':
    api.run()