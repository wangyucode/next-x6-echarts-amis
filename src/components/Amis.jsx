import { render as renderAmis } from 'amis';

import './cxd.css';

export default function Amis() {

    const ui = {
        "type": "panel",
        "title": "运营实力",
        "body": [
            {
                "type": "table-view",
                "trs": [
                    {
                        "background": "#9ecfe2",
                        "tds": [
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "评级因素",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "序号",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "指标名称",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "权重",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "二级指标值",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "指标得分",
                                },
                            }
                        ],
                        "height": 44
                    },
                    {
                        "tds": [
                            {
                                "rowspan": 4,
                                "body": {
                                    "type": "tpl",
                                    "tpl": "业务指标",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "1",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "产品结构及竞争力",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "40%",
                                },
                            },
                            {
                                "body": [
                                    // {
                                    //     "type": "textarea",
                                    //     "label": "",
                                    //     "name": "textarea",
                                    //     "minRows": 3,
                                    //     "maxRows": 20,
                                    //     "value": "测试"
                                    // }
                                ],
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "wrapperComponent": "",
                                    "tpl": "5.00",
                                },
                            }
                        ],
                        "height": 44
                    },
                    {
                        "tds": [
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "2",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "wrapperComponent": "",
                                    "tpl": "技术水平",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "wrapperComponent": "",
                                    "tpl": "30%",
                                },
                            },
                            {
                                "body": [
                                    // {
                                    //   "type": "textarea",
                                    //   "label": "",
                                    //   "name": "textarea",
                                    //   "minRows": 3,
                                    //   "maxRows": 20,
                                    //   "value": "测试"
                                    // }
                                ],
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "5.00",
                                },
                            }
                        ],
                    },
                    {
                        "tds": [
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "3",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "固定资产(亿元)(两年加权)",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "15%",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "1375.04",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "7.00",
                                },
                            }
                        ],
                    },
                    {
                        "tds": [
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "4",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "营业总收入(亿元)(三年加权)",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "15%",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "6949.30",
                                },
                            },
                            {
                                "body": {
                                    "type": "tpl",
                                    "tpl": "7.00",
                                },
                            }
                        ],
                    }
                ],
                "borderColor": "#080808",
                "themeCss": {
                    "baseControlClassName": {
                        "padding-and-margin:default": {}
                    }
                }
            },
            {
                "type": "tpl",
                "tpl": "运营实力得分：6(5.60)",
                "inline": false,
            },
            {
                "type": "tpl",
                "tpl": "行业风险得分：3",
                "inline": false,
            },
            {
                "type": "tpl",
                "tpl": "业务风险得分：6",
                "inline": false,
            }
        ],
        "className": "Panel--default border-black",
        "bodyClassName": "text-sm p-4"
    };

    return renderAmis(ui);
}