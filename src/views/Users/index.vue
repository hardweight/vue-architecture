<script>
import {
  mapGetters,
  mapActions
} from 'vuex'
import User from './User'

export default {
  name: 'Users',
  components: {
    User
  },
  computed: {
    ...mapGetters({
      users: 'users/all'
    })
  },
  methods: {
    ...mapActions({
      get: 'users/get'
    })
  },
  beforeMount () {
    this.get()
  }
}
</script>

<template>
  <ul class="users">
    <User
      v-for="(user, key) in users"
      :key="key"
      :user="user"
    />
  </ul>
</template>

<style lang="stylus" scoped>
.users
  list-style none
  margin 0 auto
  max-width 300px
  padding 0
</style>
