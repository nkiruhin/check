import * as React from 'react'
import { Breadcrumb } from 'office-ui-fabric-react/lib/Breadcrumb'
import { IColumn, SelectionMode, DetailsListLayoutMode, DetailsList } from 'office-ui-fabric-react';
import fetchApi from '../fetcher';
import { url } from 'inspector';

interface ICheckItem {
    providerOrganizationName: string,
    inn: string,
    ogrn: string,
    prosecutorsName: string,
    startDate: string,
    status: string,
    typeName: string,
    okatoName: string,
    goalOrganizationName: string
}
const columns: IColumn[] = [
    {
        key: 'goalOrganizationName',
        name: 'Организация',
        fieldName: 'goalOrganizationName',
        minWidth: 100,
        maxWidth: 100,
        data: 'string',
    },
    {
        key: 'startDate',
        name: 'Дата начала',
        fieldName: 'startDate',
        minWidth: 100,
        maxWidth: 100,
        data: 'date',
    },
    {
        key: 'status',
        name: 'Статус',
        minWidth: 70,
        maxWidth: 100,
        fieldName: 'status',
        data: 'string',
    },
    {
        key: 'typeName',
        name: 'Тип проверки',
        fieldName: 'typeName',
        minWidth: 180,
        maxWidth: 180,
        data: 'string',
    },
    {
        key: 'prosecutorsName',
        name: 'Надзорный орган',
        fieldName: 'prosecutorsName',
        minWidth: 150,
        maxWidth: 200,
        data: 'string',
    }
]
const emptyItems: ICheckItem[] = [];
const Main: React.FC = () => {

    const [items, setItems] = React.useState(emptyItems)
    const [message, setMessage] = React.useState("Подождите идет загрузка...")
    const _setItems = (data: ICheckItem[], status: number) => {
        if (status === 200) {
            setItems(data)
        } else {
            console.log("Ошибка загрузки данных")
        }
        setMessage("");
    }
    React.useEffect(() => {
        let url = "/api/FindCheck?inn=2310031475"
       fetchApi(_setItems, url, "GET")
    }, [])
   return <div>
    <Breadcrumb className="breadcrumbs" items={[
        { text: 'Проверки', key: 'Positions' },
        { text: 'Список', key: 'PositionsList' }
    ]}
        maxDisplayedItems={3}
       />
       {message}
        <DetailsList
            items={items}
            columns={columns}
            selectionMode={SelectionMode.single}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            isHeaderVisible={true}
            selectionPreservedOnEmptyClick={true}
        />
    </div>
}
export { Main }