<template>
  <div id="basket" class="collapse container">
    <div class="row">
      <div class="form col-12 col-sm-8">
        <h3>Basket Entry Form</h3>
        <form action="/basket" method="post">
          <div class="row input-section">
            <label class="col-4 left-text">Name:</label>
            <div class="col-8">
              <input name="name" id="basket-focus" type="text" value="" class="form-control">
            </div>
          </div>
          <div class="row input-section">
            <label class="col-4 left-text">Type:</label>
            <div class="col-8">
              <input name="type" type="text" value="" class="form-control">
            </div>
          </div>
          <div class="row input-section">
            <label class="col-4 left-text">Description:</label>
            <div class="col-8">
              <input name="desc" type="text" value="" class="form-control">
            </div>
          </div>
          <div class="row input-section">
            <label class="col-4 left-text">Quantity:</label>
            <div class="col-8">
              <select name="quantity" class="form-control">
                <option v-for="quantity in numRange(0, 20)">{{quantity}}</option>            
              </select>
            </div>
          </div>
          <div class="row input-section">
            <label class="col-4 left-text">Year:</label>
            <div class="col-8">
              <select name="year" class="form-control">
                <option>N/A</option>
                <option v-for="year in numRange(1986, 2018)">{{year}}</option>
              </select>
            </div>
          </div>
          <div class="row input-section">
            <label class="col-4 left-text">Color:</label>
            <div class="col-8">
              <select name="color" class="form-control">
                <option>N/A</option>
                <option v-for="color in colors">{{color}}</option>
              </select>
            </div>
          </div>
          <div class="row input-section">
            <label class="col-4 left-text">Size:</label>
            <div class="col-8">
              <select name="size" class="form-control">
                <option>N/A</option>
                <option>small</option>
                <option>medium</option>
                <option>large</option>
              </select>
            </div>
          </div>
          <div class="row input-section">
            <label class="col-4 left-text">Accessories:</label>
            <div class="col-8">
              <input name="accessories" type="text" placeholder="Separate with commas" value="" class="form-control">
            </div>
          </div>
          <div class="row input-section">
            <label class="col-4 left-text"></label>
            <div class="col-8">
              <button class="btn btn-lg btn-block btn-success" type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basket-form',
  data() {
    return {
      numRange: (start, end) => {
        const array = [];
        for (let index = start; index < end; index++) {
          array.push(index);
        }
        return array;
      },
      colors: [
        'red',
        'blue',
        'green',
        'ivory',
      ],
    };
  },
}
</script>
