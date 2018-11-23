<template>
    <div id="header">
        <div class="header">
             <Menu mode="horizontal" :theme="theme1" active-name="1">
                <MenuItem name="1">
                    <!-- <Icon type="ios-paper" /> -->
                    铭贝科技
                </MenuItem>
              
            </Menu>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            theme1: 'light'
        }   
    }
}
</script>

<style>

</style>
