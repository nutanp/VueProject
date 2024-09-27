<template>
 <form class=form-class @submit.prevent="submitForm">
    <div>
        <label>Name </label>
        <input type="text" v-model="name"/>
    </div>
    <div>
        <lable>Phone</lable>
        <input type="tel"  v-model="phone"/>
    </div>
    <div>
        <lable>email</lable>
        <input type="email" v-model="email"/>
    </div>
    <div>
        <button>
            Add Contact
        </button>
    </div>
 </form>

</template>
<script>
export default {
    emits:['add-contact'],
    data()
    {
    return {
        name:'',
        phone:'',
        email:'',
    }
    },
    methods:{
        submitForm()
        {
         this.$emit('add-contact',this.name,this.phone,this.email)
        }
    }
    
}
</script>
<style>
form {
  margin:1rem auto;
  border:2px solid red;
  box-shadow:0 2x 8px rgba(107, 28, 28, 0.26) ;  
  border-radius:10px;
  padding: 1rem;
  width:90%;
  max-width:40rem;
}


</style>