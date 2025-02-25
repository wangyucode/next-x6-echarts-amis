"use client"

import { useEffect, useState } from 'react'
import {
    Card,
    CardBody,
    Table,
    TableBody,
    TableHeader,
    TableRow,
    TableCell,
    TableColumn,
    Checkbox,
    Select,
    SelectItem,
    CardHeader
} from '@nextui-org/react'
import EChartsReact from 'echarts-for-react'

const stockData = {
    "上证指数": {
        "2014年第一季度": 2033.30,
        "2014年第二季度": 2026.36,
        "2014年第三季度": 2363.87,
        "2014年第四季度": 3234.68,
        "2015年第一季度": 3691.41,
        "2015年第二季度": 4277.22,
        "2015年第三季度": 3052.78,
        "2015年第四季度": 3539.18,
        "2016年第一季度": 2974.34,
        "2016年第二季度": 2929.61,
        "2016年第三季度": 3050.40,
        "2016年第四季度": 3103.64,
        "2017年第一季度": 3212.53,
        "2017年第二季度": 3195.46,
        "2017年第三季度": 3349.62,
        "2017年第四季度": 3307.17,
        "2018年第一季度": 3291.38,
        "2018年第二季度": 2847.42,
        "2018年第三季度": 2647.57,
        "2018年第四季度": 2493.90,
        "2019年第一季度": 3050.12,
        "2019年第二季度": 2976.28,
        "2019年第三季度": 2905.81,
        "2019年第四季度": 3050.12,
        "2020年第一季度": 2746.61,
        "2020年第二季度": 2957.54,
        "2020年第三季度": 3263.97,
        "2020年第四季度": 3473.07,
        "2021年第一季度": 3443.44,
        "2021年第二季度": 3525.68,
        "2021年第三季度": 3581.73,
        "2021年第四季度": 3639.77,
        "2022年第一季度": 3286.65,
        "2022年第二季度": 3356.59,
        "2022年第三季度": 3126.40,
        "2022年第四季度": 3089.26,
        "2023年第一季度": 3263.31,
        "2023年第二季度": 3231.41,
        "2023年第三季度": 3110.48,
        "2024年第一季度": 3041
    },
    "日经指数": {
        "2014年第一季度": 14382.34,
        "2014年第二季度": 14810.76,
        "2014年第三季度": 15627.63,
        "2014年第四季度": 17450.77,
        "2015年第一季度": 18986.67,
        "2015年第二季度": 20579.06,
        "2015年第三季度": 18017.20,
        "2015年第四季度": 19033.71,
        "2016年第一季度": 16017.26,
        "2016年第二季度": 15667.16,
        "2016年第三季度": 16780.24,
        "2016年第四季度": 19114.34,
        "2017年第一季度": 19254.80,
        "2017年第二季度": 19594.15,
        "2017年第三季度": 20654.55,
        "2017年第四季度": 22764.94,
        "2018年第一季度": 22408.52,
        "2018年第二季度": 22517.84,
        "2018年第三季度": 22939.84,
        "2018年第四季度": 20014.77,
        "2019年第一季度": 21268.73,
        "2019年第二季度": 21533.79,
        "2019年第三季度": 21771.37,
        "2019年第四季度": 23656.62,
        "2020年第一季度": 17573.35,
        "2020年第二季度": 22546.95,
        "2020年第三季度": 23629.65,
        "2020年第四季度": 27444.17,
        "2021年第一季度": 29057.78,
        "2021年第二季度": 28437.77,
        "2021年第三季度": 29882.62,
        "2021年第四季度": 28751.62,
        "2022年第一季度": 26888.52,
        "2022年第二季度": 27821.43,
        "2022年第三季度": 27821.90,
        "2022年第四季度": 26094.50,
        "2023年第一季度": 27466.66,
        "2023年第二季度": 32217.43,
        "2023年第三季度": 32431.50,
        "2024年第一季度": 32977.19,
        "2024年第二季度": 38957.44,
        "2024年第三季度": 36240.52
    },
    "纳斯达克指数": {
        "2014年第一季度": 4127.18,
        "2014年第二季度": 4370.96,
        "2014年第三季度": 4549.23,
        "2014年第四季度": 4736.05,
        "2015年第一季度": 5026.42,
        "2015年第二季度": 5210.14,
        "2015年第三季度": 5046.89,
        "2015年第四季度": 5108.67,
        "2016年第一季度": 4939.52,
        "2016年第二季度": 4879.57,
        "2016年第三季度": 5162.13,
        "2016年第四季度": 5383.12,
        "2017年第一季度": 5909.67,
        "2017年第二季度": 6210.19,
        "2017年第三季度": 6495.96,
        "2017年第四季度": 6903.39,
        "2018年第一季度": 7073.40,
        "2018年第二季度": 7588.32,
        "2018年第三季度": 7909.59,
        "2018年第四季度": 6635.28,
        "2019年第一季度": 7637.24,
        "2019年第二季度": 8006.24,
        "2019年第三季度": 7962.88,
        "2019年第四季度": 8814.23,
        "2020年第一季度": 8567.37,
        "2020年第二季度": 9814.08,
        "2020年第三季度": 11056.65,
        "2020年第四季度": 12888.28,
        "2021年第一季度": 13197.18,
        "2021年第二季度": 14038.76,
        "2021年第三季度": 15215.74,
        "2021年第四季度": 15644.97,
        "2022年第一季度": 14501.95,
        "2022年第二季度": 11340.02,
        "2022年第三季度": 12265.41,
        "2022年第四季度": 10466.48,
        "2023年第一季度": 11630.51,
        "2023年第二季度": 13788.33,
        "2023年第三季度": 13211.81,
        "2024年第一季度": 12269.55,
        "2024年第二季度": 13721.09,
        "2024年第三季度": 14181.26
    }
}

export default function Echarts() {
    const [options, setOptions] = useState({});
    const [types, setTypes] = useState({});
    const [disabled, setDisabled] = useState({});


    useEffect(() => {
        const series = [];
        const x = [];
        Object.keys(stockData).forEach(key => {
            if (!disabled[key]) {
                series.push({
                    name: key,
                    type: types[key] || 'line',
                    data: Object.values(stockData[key]),
                });
            }
        });
        Object.keys(stockData.纳斯达克指数).forEach(key => {
            x.push(key);
        });
        console.log(series)
        setOptions({
            tooltip: { trigger: 'axis' },
            xAxis: { type: 'category', data: x },
            yAxis: {},
            legend: {},
            series
        });
    }, [types, disabled]);

    function onTypeChange(key, type) {
        setTypes(prev => ({ ...prev, [key]: type }));
    }

    function onEnableChange(key, enabled) {
        setDisabled(prev => ({ ...prev, [key]: !enabled }));
    }

    return (
        <Card className='w-full'>
            <CardHeader>
                <h1 className='text-2xl'>ECharts图表</h1>
            </CardHeader>
            <CardBody className='w-full h-72 flex-row'>
                <EChartsReact option={options} notMerge={true}
                    className='flex-1'
                />
                <Table aria-label="近10年股票走势" className='flex-1'>
                    <TableHeader>
                        <TableColumn>数据名称</TableColumn>
                        <TableColumn>图表类型</TableColumn>
                        <TableColumn>是否启用</TableColumn>
                    </TableHeader>
                    <TableBody>
                        <TableRow key="1">
                            <TableCell>上证指数</TableCell>
                            <TableCell>
                                <Select defaultSelectedKeys={['line']} onSelectionChange={keys => onTypeChange("上证指数", keys.currentKey)} aria-label='图表类型'>
                                    <SelectItem key="line">折线图</SelectItem>
                                    <SelectItem key="bar">柱状图</SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell><Checkbox defaultSelected onValueChange={(v) => onEnableChange("上证指数", v)}></Checkbox></TableCell>
                        </TableRow>
                        <TableRow key="2">
                            <TableCell>日经指数</TableCell>
                            <TableCell>
                                <Select defaultSelectedKeys={['line']} onSelectionChange={keys => onTypeChange("日经指数", keys.currentKey)} aria-label='图表类型'>
                                    <SelectItem key="line">折线图</SelectItem>
                                    <SelectItem key="bar">柱状图</SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell><Checkbox defaultSelected onValueChange={(v) => onEnableChange("日经指数", v)}></Checkbox></TableCell>
                        </TableRow>
                        <TableRow key="3">
                            <TableCell>纳斯达克指数</TableCell>
                            <TableCell>
                                <Select defaultSelectedKeys={['line']} onSelectionChange={keys => onTypeChange("纳斯达克指数", keys.currentKey)} aria-label='图表类型'>
                                    <SelectItem key="line">折线图</SelectItem>
                                    <SelectItem key="bar">柱状图</SelectItem>
                                </Select>
                            </TableCell>
                            <TableCell><Checkbox defaultSelected onValueChange={(v) => onEnableChange("纳斯达克指数", v)}></Checkbox></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </CardBody>
        </Card>
    )
}
