
<template>
    <div>
        <div class="input-group">
            <div class="select-group">
                <div class="option-group">
                    <label for="exampleFormControlSelect1">Client select</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div class="option-group">
                    <label for="exampleFormControlSelect1">Property select</label>
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
            </div>
            <div class="text-group">
                <div class="text-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>            
                <div class="text-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>            
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.input-group{
    width: 75%;
    margin: auto;
}
.text-group{
    width: 100%;
    margin: auto;
}
.select-group{
    display: flex;
    flex-direction: row;
    width: 800px;
}
.option-group{
    display: flex;
    flex-direction: row;
    width: 400px;
    align-self: auto;
}
label{
    width: 200px;
    align-self: left;
}
</style>