import {IndexState} from '@/types/views/index.interface';
import {GetterTree, MutationTree, ActionTree} from 'vuex';
import * as IndexApi from '@/api/index';

const state: IndexState = {
    // author: 'admin'
};

// 强制使用getter获取state
const getters: GetterTree<IndexState, any> = {
    // author: (state: IndexState) => state.author
};

// 更改state
const mutations: MutationTree<IndexState> = {
    // 更新state都用该方法
    UPDATE_STATE(state: IndexState, data: IndexState) {
        for (const key in data) {
            if (!data.hasOwnProperty(key)) {
                return;
            }
            // state[key] = data[key];
        }
    }
};

const actions: ActionTree<IndexState, any> = {
    UPDATE_STATE_ASYN({commit, state: IndexState}, data: IndexState) {
        commit('UPDATE_STATE', data);
    },
    GET_DATA_ASYN({commit, state: LoginState}) {
        IndexApi.getData();
        // IndexApi.getSecondList(0).then(res => {
        //     console.log(res);
        // });
        // console.log(IndexApi)
        // // 调用SecondApi接口; then()成功回调
        // IndexApi.getSecondList(0).then(data => {
        //     console.log('getSecondList:', data);
        // });
    }
};

export default {
    state,
    getters,
    mutations,
    actions
};

