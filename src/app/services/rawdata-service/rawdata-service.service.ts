import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RawdataServiceService {

private rawCourseData = {
  "kblx": 7,
  "xqbzxxszList": [],
  "xsxx": {
    "XH_ID": "201906061102",
    "XH": "201906061102",
    "XQMMC": "1",
    "XM": "陈杨",
    "XNMC": "2019-2020",
    "XQM": "3",
    "XNM": "2019"
  },
  "sjkList": [],
  "xkkg": true,
  "xqjmcMap": {
    "1": "星期一",
    "2": "星期二",
    "3": "星期三",
    "4": "星期四",
    "5": "星期五",
    "6": "星期六",
    "7": "星期日"
  },
  "xskbsfxstkzt": "0",
  "kbList": [
    {
      "cd_id": "19894",
      "cdmc": "子良A221",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "4-5节",
      "jcor": "4-5",
      "jcs": "4-5",
      "jgh_id": "3225",
      "jgpxzd": "1",
      "jxb_id": "88F788FE792721F2E053A11310AC7C93",
      "jxbmc": "高等数学Ⅰ-0003",
      "kch_id": "G210013",
      "kcmc": "高等数学Ⅰ",
      "kcxszc": "理论:80",
      "khfsmc": "考试",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "24",
      "oldzc": "65535",
      "pageable": true,
      "pkbj": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "练晓鹏",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "1",
      "xqjmc": "星期一",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "1-16周",
      "zcmc": "副教授",
      "zhxs": "5",
      "zxs": "81",
      "zyfxmc": "无方向"
    },
    {
      "cd_id": "19818",
      "cdmc": "教204",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "1-2节",
      "jcor": "1-2",
      "jcs": "1-2",
      "jgh_id": "605",
      "jgpxzd": "1",
      "jxb_id": "88E37C89BDAD041EE053A11310ACE816",
      "jxbmc": "中国近现代史纲要-0005",
      "kch_id": "13082",
      "kcmc": "中国近现代史纲要",
      "kcxszc": "理论:32",
      "khfsmc": "考查",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "3",
      "oldzc": "1",
      "pageable": true,
      "pkbj": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "颜桂珍",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "2",
      "xqjmc": "星期二",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "1周",
      "zcmc": "副教授",
      "zhxs": "2",
      "zxs": "32",
      "zyfxmc": "无方向"
    },
    {
      "cd_id": "19821",
      "cdmc": "教208",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "1-2节",
      "jcor": "1-2",
      "jcs": "1-2",
      "jgh_id": "605",
      "jgpxzd": "1",
      "jxb_id": "88E37C89BDAD041EE053A11310ACE816",
      "jxbmc": "中国近现代史纲要-0005",
      "kch_id": "13082",
      "kcmc": "中国近现代史纲要",
      "kcxszc": "理论:32",
      "khfsmc": "考查",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "3",
      "oldzc": "65534",
      "pageable": true,
      "pkbj": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "颜桂珍",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "2",
      "xqjmc": "星期二",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "2-16周",
      "zcmc": "副教授",
      "zhxs": "2",
      "zxs": "32",
      "zyfxmc": "无方向"
    },
    {
      "cd_id": "19836",
      "cdmc": "教502",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "3-4节",
      "jcor": "3-4",
      "jcs": "3-4",
      "jgh_id": "1065",
      "jgpxzd": "1",
      "jxb_id": "89D97D97B4E77A47E053A11310ACECDA",
      "jxbmc": "大学英语-0054",
      "kch_id": "4EAAB9FAF9641EB1E053A11310AC10C4",
      "kcmc": "大学英语",
      "kcxszc": "理论:64",
      "khfsmc": "考试",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "12",
      "oldzc": "65535",
      "pageable": true,
      "pkbj": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "许晓洁",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "2",
      "xqjmc": "星期二",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "1-16周",
      "zcmc": "讲师",
      "zhxs": "4",
      "zxs": "64",
      "zyfxmc": "无方向"
    },
    {
      "cd_id": "19927",
      "cdmc": "子良A413",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "10-11节",
      "jcor": "10-11",
      "jcs": "10-11",
      "jgh_id": "5EA2952B343D5C2CE053A11310AC8485,4582,906",
      "jgpxzd": "1",
      "jxb_id": "91B494227B855D69E053A11310ACA4C5",
      "jxbmc": "心理健康与自我成长-0005",
      "kch_id": "91B413BA6A825CCAE053A11310AC2F02",
      "kcmc": "心理健康与自我成长",
      "kcxszc": "理论:16",
      "khfsmc": "未安排",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "1536",
      "oldzc": "43690",
      "pageable": true,
      "pkbj": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "陈菲,屠佳,王慧",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "2",
      "xqjmc": "星期二",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "2-16周(双)",
      "zcmc": "副教授,研究员",
      "zhxs": "2",
      "zxs": "16",
      "zyfxmc": "无方向"
    },
    {
      "cd_id": "19815",
      "cdmc": "教201",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "1-2节",
      "jcor": "1-2",
      "jcs": "1-2",
      "jgh_id": "3225",
      "jgpxzd": "1",
      "jxb_id": "88F788FE792721F2E053A11310AC7C93",
      "jxbmc": "高等数学Ⅰ-0003",
      "kch_id": "G210013",
      "kcmc": "高等数学Ⅰ",
      "kcxszc": "理论:80",
      "khfsmc": "考试",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "3",
      "oldzc": "65535",
      "pageable": true,
      "pkbj": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "练晓鹏",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "3",
      "xqjmc": "星期三",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "1-16周",
      "zcmc": "副教授",
      "zhxs": "5",
      "zxs": "81",
      "zyfxmc": "无方向"
    },
    {
      "cd_id": "6D9045D1538D3105E053A11310ACC500",
      "cdmc": "文102",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "3-4节",
      "jcor": "3-4",
      "jcs": "3-4",
      "jgh_id": "1065",
      "jgpxzd": "1",
      "jxb_id": "89D97D97B4E77A47E053A11310ACECDA",
      "jxbmc": "大学英语-0054",
      "kch_id": "4EAAB9FAF9641EB1E053A11310AC10C4",
      "kcmc": "大学英语",
      "kcxszc": "理论:64",
      "khfsmc": "考试",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "12",
      "oldzc": "65535",
      "pageable": true,
      "pkbj": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "许晓洁",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "3",
      "xqjmc": "星期三",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "1-16周",
      "zcmc": "讲师",
      "zhxs": "4",
      "zxs": "64",
      "zyfxmc": "无方向"
    },
    {
      "cd_id": "19936",
      "cdmc": "子良A532",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "6-7节",
      "jcor": "6-7",
      "jcs": "6-7",
      "jgh_id": "305",
      "jgpxzd": "1",
      "jxb_id": "885731E0F1730CF1E053A11310ACAD75",
      "jxbmc": "程序设计基础C-0006（大类）",
      "kch_id": "4320",
      "kcmc": "程序设计基础C",
      "kcxszc": "理论:48,实验:16",
      "khfsmc": "考试",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "96",
      "oldzc": "65535",
      "pageable": true,
      "pkbj": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "钱能",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "3",
      "xqjmc": "星期三",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "1-16周",
      "zcmc": "教授",
      "zhxs": "4",
      "zxs": "64",
      "zyfxmc": "无方向"
    },
    {
      "cd_id": "19822",
      "cdmc": "教301",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "3-4节",
      "jcor": "3-4",
      "jcs": "3-4",
      "jgh_id": "4526",
      "jgpxzd": "1",
      "jxb_id": "88E92E56A5230C65E053A11310ACF1D7",
      "jxbmc": "线性代数-0006",
      "kch_id": "101",
      "kcmc": "线性代数",
      "kcxszc": "理论:32",
      "khfsmc": "考查",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "12",
      "oldzc": "65535",
      "pageable": true,
      "pkbj": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "顾娟如",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "4",
      "xqjmc": "星期四",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "1-16周",
      "zcmc": "副教授",
      "zhxs": "2",
      "zxs": "32",
      "zyfxmc": "无方向"
    },
    {
      "cdmc": "未排地点",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "6-7节",
      "jcor": "6-7",
      "jcs": "6-7",
      "jgh_id": "927E53FFD2593638E053A11310AC547C",
      "jgpxzd": "1",
      "jxb_id": "9264CCDB3CED178FE053A11310ACAEBE",
      "jxbmc": "羽毛球初级－王梓宇周四67朝晖混",
      "kch_id": "13861",
      "kcmc": "体育",
      "kcxszc": "理论:32",
      "khfsmc": "未安排",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "96",
      "oldzc": "65535",
      "pageable": true,
      "pkbj": "0",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "王梓宇",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "4",
      "xqjmc": "星期四",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "1-16周",
      "zhxs": "2",
      "zxs": "32",
      "zyfxmc": "无方向"
    },
    {
      "cd_id": "19815",
      "cdmc": "教201",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "1-2节",
      "jcor": "1-2",
      "jcs": "1-2",
      "jgh_id": "3225",
      "jgpxzd": "1",
      "jxb_id": "88F788FE792721F2E053A11310AC7C93",
      "jxbmc": "高等数学Ⅰ-0003",
      "kch_id": "G210013",
      "kcmc": "高等数学Ⅰ",
      "kcxszc": "理论:80",
      "khfsmc": "考试",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "3",
      "oldzc": "255",
      "pageable": true,
      "pkbj": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "练晓鹏",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "5",
      "xqjmc": "星期五",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "1-8周",
      "zcmc": "副教授",
      "zhxs": "5",
      "zxs": "81",
      "zyfxmc": "无方向"
    },
    {
      "cd_id": "19936",
      "cdmc": "子良A532",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "6-7节",
      "jcor": "6-7",
      "jcs": "6-7",
      "jgh_id": "305",
      "jgpxzd": "1",
      "jxb_id": "885731E0F1730CF1E053A11310ACAD75",
      "jxbmc": "程序设计基础C-0006（大类）",
      "kch_id": "4320",
      "kcmc": "程序设计基础C",
      "kcxszc": "理论:48,实验:16",
      "khfsmc": "考试",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "96",
      "oldzc": "65535",
      "pageable": true,
      "pkbj": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "钱能",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "5",
      "xqjmc": "星期五",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "1-16周",
      "zcmc": "教授",
      "zhxs": "4",
      "zxs": "64",
      "zyfxmc": "无方向"
    },
    {
      "cd_id": "19823",
      "cdmc": "教302",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "10-11节",
      "jcor": "10-11",
      "jcs": "10-11",
      "jgh_id": "3648",
      "jgpxzd": "1",
      "jxb_id": "8790F4A8D7D3732BE053A11310ACA89B",
      "jxbmc": "人体健康与疾病-朝晖",
      "kch_id": "20781",
      "kcmc": "人体健康与疾病",
      "kcxszc": "理论:32",
      "khfsmc": "考查",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "1536",
      "oldzc": "65535",
      "pageable": true,
      "pkbj": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "陈艳",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "5",
      "xqjmc": "星期五",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "1-16周",
      "zcmc": "副教授",
      "zhxs": "2",
      "zxs": "32",
      "zyfxmc": "无方向"
    },
    {
      "cd_id": "19894",
      "cdmc": "子良A221",
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jc": "2-4节",
      "jcor": "2-4",
      "jcs": "2-4",
      "jgh_id": "1479",
      "jgpxzd": "1",
      "jxb_id": "919D57B6FD6D418DE053A11310AC3175",
      "jxbmc": "军事理论-0018",
      "kch_id": "8A7950DDEBD68AC0E053A11310AC613C",
      "kcmc": "军事理论",
      "kcxszc": "理论:36",
      "khfsmc": "考试",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "oldjc": "14",
      "oldzc": "880",
      "pageable": true,
      "pkbj": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "sxbj": "1",
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xkbz": "无",
      "xm": "陈捷",
      "xnm": "2019",
      "xqdm": "0",
      "xqh1": "01,",
      "xqh_id": "01",
      "xqj": "6",
      "xqjmc": "星期六",
      "xqm": "3",
      "xqmc": "朝晖校区",
      "xsdm": "01",
      "xslxbj": "◆",
      "zcd": "5-7周,9-10周",
      "zcmc": "讲师",
      "zhxs": "3",
      "zxs": "0",
      "zyfxmc": "无方向"
    }
  ],
  "jxhjkcList": [
    {
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jgpxzd": "1",
      "kcmc": "体育◆",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "pageable": true,
      "qsjsz": "1-16周",
      "qsz": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xm": "王梓宇",
      "zhxs": "16",
      "zzz": "16"
    },
    {
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jgpxzd": "1",
      "kcmc": "大学英语◆",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "pageable": true,
      "qsjsz": "1-16周",
      "qsz": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xm": "许晓洁",
      "zhxs": "16",
      "zzz": "16"
    },
    {
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jgpxzd": "1",
      "kcmc": "军事理论◆",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "pageable": true,
      "qsjsz": "5-7周,9-10周",
      "qsz": "5",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xm": "陈捷",
      "zhxs": "5",
      "zzz": "10"
    },
    {
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jgpxzd": "1",
      "kcmc": "线性代数◆",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "pageable": true,
      "qsjsz": "1-16周",
      "qsz": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xm": "顾娟如",
      "zhxs": "16",
      "zzz": "16"
    },
    {
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jgpxzd": "1",
      "kcmc": "高等数学Ⅰ◆",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "pageable": true,
      "qsjsz": "1-16周",
      "qsz": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xm": "练晓鹏",
      "zhxs": "16",
      "zzz": "16"
    },
    {
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jgpxzd": "1",
      "kcmc": "程序设计基础C◆",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "pageable": true,
      "qsjsz": "1-16周",
      "qsz": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xm": "钱能",
      "zhxs": "16",
      "zzz": "16"
    },
    {
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jgpxzd": "1",
      "kcmc": "人体健康与疾病◆",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "pageable": true,
      "qsjsz": "1-16周",
      "qsz": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xm": "陈艳",
      "zhxs": "16",
      "zzz": "16"
    },
    {
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jgpxzd": "1",
      "kcmc": "中国近现代史纲要◆",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "pageable": true,
      "qsjsz": "1-16周",
      "qsz": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xm": "颜桂珍",
      "zhxs": "16",
      "zzz": "16"
    },
    {
      "date": "null年一月一日",
      "dateDigit": "2019年11月8日",
      "day": "1",
      "jgpxzd": "1",
      "kcmc": "心理健康与自我成长◆",
      "listnav": "false",
      "localeKey": "zh_CN",
      "month": "1",
      "pageable": true,
      "qsjsz": "2-16周(双)",
      "qsz": "1",
      "queryModel": {
        "currentPage": 1,
        "currentResult": 0,
        "entityOrField": false,
        "limit": 15,
        "offset": 0,
        "pageNo": 0,
        "pageSize": 15,
        "showCount": 10,
        "sorts": [],
        "totalCount": 0,
        "totalPage": 0,
        "totalResult": 0
      },
      "rangeable": true,
      "rsdzjs": 0,
      "totalResult": "0",
      "userModel": {
        "monitor": false,
        "roleCount": 0,
        "roleKeys": "",
        "roleValues": "",
        "status": 0,
        "usable": false
      },
      "xm": "屠佳,陈菲,王慧",
      "zhxs": "8",
      "zzz": "16"
    }
  ],
  "xsbjList": [
    {
      "xslxbj": "◆",
      "xsmc": "理论",
      "xsdm": "01"
    },
    {
      "xslxbj": "◇",
      "xsmc": "实验",
      "xsdm": "02"
    },
    {
      "xslxbj": "●",
      "xsmc": "实习",
      "xsdm": "06"
    },
    {
      "xslxbj": "○",
      "xsmc": "实践",
      "xsdm": "07"
    },
    {
      "xslxbj": "☆",
      "xsmc": "习题",
      "xsdm": "04"
    },
    {
      "xslxbj": "★",
      "xsmc": "上机",
      "xsdm": "08"
    },
    {
      "xslxbj": "■",
      "xsmc": "军训",
      "xsdm": "09"
    }
  ]
};

  constructor() { 
  }

  public getRawCourseData(){
    return this.rawCourseData;
  }
}
