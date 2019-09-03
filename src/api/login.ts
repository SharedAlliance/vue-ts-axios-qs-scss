import Api from '@/utils/request';

export const postLogin = (params: Object) => {
    return Api.postLogin(params, 'POST');
};

