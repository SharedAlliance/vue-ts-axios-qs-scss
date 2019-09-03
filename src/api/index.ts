import Api from '@/utils/request';

export const getData = () => {
    return Api.getData();
};
export const getSecondList = (pageNum: number, condition?: string) => {
    let params = {
        data: pageNum
    };
    // let params: SecondListParams = { index: pageNum }
    // if(!isEmpty(condition)) {
    //     params.predicate = condition;
    // }
    console.log(params)
    return Api.getSecondList(params, 'GET');
};
