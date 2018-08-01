import {
  shallowMount
} from '@vue/test-utils'
import User from '@/views/Users/User'

describe('Users.vue', () => {
  it('render list', () => {
    const user = {
      name: {
        title: 'Captain',
        first: 'Landonis',
        last: 'Calrissian'
      },
      picture: {
        thumbnail: 'https://randomuser.me/api/portraits/thumb/men/32.jpg'
      }
    }
    const fullName = 'Captain Landonis Calrissian'
    const wrapper = shallowMount(User, {
      propsData: { user }
    })

    expect(wrapper.find('.user__name').text()).toMatch(fullName)
  })
})
