import json, csv

ndq = csv.reader(open("NYSE.csv"))
symbols = [(row[0], row[1]) for row in ndq]
d = {}
for symbol in symbols: d[symbol[1]] = symbol[0]
json.dump(d, open("NYSE.json", 'w'))
