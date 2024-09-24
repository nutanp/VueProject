import appHeader from "@/components/appHeader.vue";
import {mount} from '@vue/test-utils'
describe('appHeader' ,()=>{
    test('if user is not logged in do not show logout button',()=>{
        const wrapper=mount(appHeader)
        expect(wrapper.find('button').isVisible()).toBe(false);
        expect(true).toBe(true);
    } )
    test('if user is  logged in ,  show logout button',async()=>{
        const wrapper=mount(appHeader)
        wrapper.setData({loggedin:true})
        await wrapper.vm.$nextTick();
        expect(wrapper.find('button').isVisible()).toBe(true);
    } )

}

)