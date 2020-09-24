
import Popover from '../../src/popover.vue'
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
chai.use(sinonChai)

describe('Popover', () => {
    //  BDD 行为驱动测试
    it('存在.', () => {
        expect(Popover).to.be.ok
    })
    it('设置position', () => {

        const wrapper = mount(Popover, {
            slots: {
                default: { template: `<button>点我</button>` },
                content: '<div>弹出内容</div>'
            },
            propsData: {
                position: 'bottom'
            }
        })
        wrapper.find('button').trigger('click')
        let classes = wrapper.find('.content-wrapper').classes()
        expect(classes).to.include('position-bottom')

        // const div = document.createElement('div')
        // document.body.appendChild(div)
        // div.innerHTML = `
        // <sl-popover  position="top"  ref="popover">
        // <div slot="content"> 哈哈哈哈</div>
        //     <button>点击在右</button>
        // </sl-popover>
        // `
        // let vm = new Vue({ el: div })
        // vm.$nextTick(() => {
        //     vm.$el.querySelector('button').click()
        //     vm.$nextTick(() => {
        //         const { contentWrapper } = vm.$refs.popover.$refs
        //         expect(contentWrapper.classList.contains('position-top')).to.be.true
        //         done()
        //     })
        // })
    })

    xit('设置trigger ', () => {
        // 暂时跳过
    })
    //  it('可设置v-model', () => {
    //      const Constructor = Vue.extend(Popover)
    //      const vm = new Constructor({}).$mount()
    //      expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    //      vm.$destroy() //清理
    //  })

})