<template>
  <div class="home">
    <NewFriend @add-contact="parentEmitaddcontact"/>
  </div>
</template>

<script>
// @ is an alias to /src
import NewFriend from '@/components/NewFriend.vue'

export default {
  name: 'HomeView',
  components: {NewFriend },
  methods:
  {
    parentEmitaddcontact(name,phone,email)
    {
      console.log('name',name);
      console.log('phone',phone);
      console.log('email',email);
    }
  }
}
</script>
