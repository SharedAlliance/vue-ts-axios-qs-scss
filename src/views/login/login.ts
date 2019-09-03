import {Component, Vue} from 'vue-property-decorator';
import {Getter, Action} from 'vuex-class';
import {LoginData} from '@/types/views/login.interface';
// import {  } from "@/components" // 组件
import {Test} from '@/components';
import * as LoginApi from '@/api/login'; // 组件
@Component({
    name: 'login',
    components: {
        Test
    }
})
export default class About extends Vue {
    // Getter
    // @Getter login.author

    // Action
    // @Action UPDATE_STATE_ASYN;

    // data
    data: LoginData = {
        pageName: 'login'
    };

    created() {
        //

    }

    private login() {
        // console.log('login');
        LoginApi.postLogin({
            username: 'admin',
            password: 123456
        }).then((res:any) => {
            // console.log(res);
            // commit('UPDATE_STATE')
        });
    }

    activated() {
        //
    }

    mounted() {
        //
    }

    // 初始化函数
    init() {
        //
    }

}
