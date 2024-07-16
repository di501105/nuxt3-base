import openpyxl
import json
import sys

LANG = {'en-US': 0, 'zh-TW': 0, 'position': 0}

def load_content(pa):
    print(pa)
    wb = openpyxl.load_workbook(pa)
    ws = wb['Gochisou']
    ll = []
    header = []
    for row in ws.iter_rows(min_row=1, max_col=4, values_only=True):
        if row [0] != None:
            if len(header) == 0:
                header = [a.strip() for a in row]
            else:
                ll.append(row)
    return (header,ll)

def insert_data(keys, dic, value):
    if len(keys) == 1:
        dic[keys[0]] = value if value else ""
    else:
        if keys[0] not in dic:
            dic[keys[0]] = {}
        insert_data(keys[1:], dic[keys[0]], value)

def export_json(name, dd):
    with open(name, 'w+') as file:
        file.write(json.dumps(dd, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    headers, ll = load_content(sys.argv[1])
    locale_dic = {}
    for lang in LANG:
        locale_dic[lang] = {}
        try:
            lp = headers.index(lang)
            LANG[lang] = lp
        except:
            print('Error on load ', lang)

    for l in ll:
        for lang in LANG:
            if '-' in lang:
                insert_data(l[LANG['position']].split('.'), locale_dic[lang], l[LANG[lang]])

    for lang in LANG:
        if '-' in lang:
            export_json(lang + '.json', locale_dic[lang])
            print(lang + '.json')



