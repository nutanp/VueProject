<template>
    <div>
    <button v-show="loggedin" >Logout</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            loggedin:false
        }
    }
}
</script>
 