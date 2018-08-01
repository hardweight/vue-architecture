<script>
export default {
  name: 'User',
  props: {
    user: {
      type: Object,
      default () {
        return null
      }
    }
  },
  computed: {
    fullName (name) {
      const { title, first, last } = this.user.name

      return `${title} ${first} ${last}`
    }
  }
}
</script>

<template>
  <li class="user">
    <figure class="user__photo">
      <img
        :src="user.picture.thumbnail"
        :alt="fullName"
      >
    </figure>
    <p class="user__name">
      {{ fullName }}
    </p>
  </li>
</template>

<style lang="stylus" scoped>
.user
  align-items center
  display flex
  margin-bottom 15px

+prefix-classes("user__")
  .photo
    height 48px
    margin 0
    margin-right 15px
    width 48px

    img
      border-radius 50%
      width 100%

  .name
    color #333
    text-decoration none
</style>
