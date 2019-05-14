<template>
    <div align='center'>
        <h2>Termo de Privacidade</h2>
        <p>Texto do Termo de Privacidade</p>
    <div>
        <input type="checkbox" name="privacy-terms" id="privacy-terms" v-model="accepted">
        <span>Li e concordo com os termos acima.</span>
    </div>
    <div>
        <router-link to='/questions'>
            <b-button :disabled="!accepted">Login com Facebook</b-button>
        </router-link>
    </div>
    </div> 
</template>

<script>
export default {
    data() {
        return { 
            accepted: false
        }
    }
}
</script>
