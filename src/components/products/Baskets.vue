<template>
  <div id="baskets" class="products">
    <div class="table-header flex-row">
      <p class="property property-s">Year</p>
      <div class="flex-row full-row">
        <p class="property col-xs-12 col-sm-6 col-md-4">
          Name
        </p>
        <p class="property d-none d-sm-block col-sm-6 col-md-4">
          Type
        </p>
        <p class="property d-none d-md-block col-md-4">
          Description
        </p>
      </div>
      <p class="property property-s">#</p>
      <p class="property property-s">Color</p>
      <p class="property property-s">Size</p>
    </div>
    <div class="basket" v-for="basket in baskets" data-toggle="collapse" :href="`#b-${basket._id}`" aria-expanded="true" :aria-controls="`b-${basket._id}`">
      <div class="product-header flex-row" role="tag">
        <p class="property property-n property-s">{{basket.year}}</p>
        <div class="flex-row full-row">
          <p class="property col-xs-12 col-sm-6 col-md-4">
            {{basket.name}}
          </p>
          <p class="property d-sm-block col-sm-6 col-md-4 d-none">
            {{basket.type}}
          </p>
          <p class="property d-md-block col-md-4 d-none">
            {{basket.desc}}
          </p>
        </div>
        <p class="property property-s property-n">
          {{basket.quantity}}
        </p>
        <div class="property property-s">
          <div v-if="basket.color === 'N/A'">
            <i class="fa fa-circle-thin text-NA" aria-hidden="true"></i>
          </div>
          <div v-else>
            <i :class="`fa fa-circle text-${basket.color}`" aria-hidden="true"></i>
          </div>
        </div>
        <div class="property property-s">
          <div v-if="basket.color === 'N/A'">
            <i class="fa fa-circle-thin text-NA" aria-hidden="true"></i>
          </div>
          <div v-else>
            <i :class="`fa fa-circle text-${basket.color}`" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div :id="`b-${basket._id}`" class="collapse product-body" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
        <div class="flex-row">
          <img src="http://www.fillmurray.com/100/100" alt="">
          <div>
            <div class="d-block d-sm-none">
              <b>Type:</b> {{basket.type}}
            </div>
            <div class="d-block d-md-none">
              <b>Description:</b> {{basket.desc}}
            </div>
            <div class="">
              <b>Size:</b> {{basket.size}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Baskets',
  data() {
    return {
      baskets: [
        {
          "_id": "5a220a4b0b2e5f29ff1b3655",
          "year": "",
          "quantity": "1",
          "name": "Harmony Basket No 3",
          "type": "Collectors Club",
          "desc": "asdfasdfasdfasdfasdfasdf",
          "color": "green",
          "size": "N/A",
          "lid": true,
          "liner": false,
          "protector": false,
          "accessories": false
      },
        {
          "_id": "5a220ae90b2e5f29ff1b3658",
          "year": "1992",
          "quantity": "1",
          "name": "Market Basket",
          "type": "",
          "desc": "",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": false,
          "accessories": false
        },
        {
          "_id": "5a220bae0b2e5f29ff1b365d",
          "year": "1994",
          "quantity": "1",
          "name": "Business Card",
          "type": "",
          "desc": "blue/burgundy weaves",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": false,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a2210a7b5aaff2a8ab80d97",
          "year": "1995",
          "quantity": "1",
          "name": "Waste Basket",
          "type": "Father'S Day",
          "desc": "",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": false,
          "protector": false,
          "accessories": false
        },
        {
          "_id": "5a220b1b0b2e5f29ff1b365a",
          "year": "1995",
          "quantity": "1",
          "name": "Stair Step",
          "type": "",
          "desc": "",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220b3f0b2e5f29ff1b365b",
          "year": "1995",
          "quantity": "1",
          "name": "Gathering",
          "type": "",
          "desc": "",
          "color": "N/A",
          "size": "medium",
          "lid": true,
          "liner": true,
          "protector": false,
          "accessories": false
        },
        {
          "_id": "5a220b820b2e5f29ff1b365c",
          "year": "1995",
          "quantity": "1",
          "name": "Horizon Of Hope",
          "type": "",
          "desc": "",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220b060b2e5f29ff1b3659",
          "year": "1995",
          "quantity": "1",
          "name": "Vegetable",
          "type": "",
          "desc": "",
          "color": "N/A",
          "size": "large",
          "lid": false,
          "liner": false,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220f8cb5aaff2a8ab80d94",
          "year": "1995",
          "quantity": "2",
          "name": "Tulip",
          "type": "",
          "desc": "",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220bf70b2e5f29ff1b365e",
          "year": "1996",
          "quantity": "6",
          "name": "Horizon Of Hope",
          "type": "",
          "desc": "6 protectors, 4 liners",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220e6c779b7a2a6e161d3c",
          "year": "1996",
          "quantity": "2",
          "name": "Shades Of Autumn Maple Leaf",
          "type": "",
          "desc": "check these later",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": false,
          "protector": false,
          "accessories": false
        },
        {
          "_id": "5a220dcf779b7a2a6e161d38",
          "year": "1996",
          "quantity": "1",
          "name": "Summertime",
          "type": "All American",
          "desc": "",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220e45779b7a2a6e161d3b",
          "year": "1997",
          "quantity": "2",
          "name": "Father'S Day",
          "type": "",
          "desc": "",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": false,
          "accessories": false
        },
        {
          "_id": "5a220d25779b7a2a6e161d35",
          "year": "1998",
          "quantity": "1",
          "name": "Easter",
          "type": "",
          "desc": "natural",
          "color": "N/A",
          "size": "small",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220ff0b5aaff2a8ab80d95",
          "year": "1998",
          "quantity": "1",
          "name": "Pie",
          "type": "All American",
          "desc": "",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220615ed464129b4c3d285",
          "year": "1998",
          "quantity": "1",
          "name": "Recipe",
          "type": "",
          "desc": "",
          "color": "blue",
          "size": "N/A",
          "lid": true,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220f40b5aaff2a8ab80d93",
          "year": "1998",
          "quantity": "1",
          "name": "Sleigh",
          "type": "",
          "desc": "",
          "color": "N/A",
          "size": "small",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a21f78c4961b3287cd3561b",
          "year": "1998",
          "quantity": "2",
          "name": "Two Pie Grandma",
          "type": "",
          "desc": "",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220620ed464129b4c3d286",
          "year": "1998",
          "quantity": "1",
          "name": "Recipe",
          "type": "",
          "desc": "",
          "color": "green",
          "size": "N/A",
          "lid": true,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220a790b2e5f29ff1b3656",
          "year": "1998",
          "quantity": "1",
          "name": "Snapdragon",
          "type": "",
          "desc": "",
          "color": "red",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220e04779b7a2a6e161d3a",
          "year": "1999",
          "quantity": "1",
          "name": "Peppermint",
          "type": "",
          "desc": "",
          "color": "green",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220df7779b7a2a6e161d39",
          "year": "1999",
          "quantity": "1",
          "name": "Peppermint",
          "type": "",
          "desc": "",
          "color": "red",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220ed5e9754a2a85c8aba8",
          "year": "1999",
          "quantity": "3",
          "name": "Santa'S Little Helper",
          "type": "",
          "desc": "",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": false,
          "accessories": false
        },
        {
          "_id": "5a220cf4779b7a2a6e161d34",
          "year": "2000",
          "quantity": "1",
          "name": "Longaberger Golf Club",
          "type": "",
          "desc": "",
          "color": "green",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a221109b5aaff2a8ab80d98",
          "year": "2000",
          "quantity": "1",
          "name": "Renewal",
          "type": "Collectors Club",
          "desc": "",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220da1779b7a2a6e161d37",
          "year": "2002",
          "quantity": "1",
          "name": "Easter",
          "type": "",
          "desc": "white-washed with pink",
          "color": "N/A",
          "size": "small",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220d6a779b7a2a6e161d36",
          "year": "2002",
          "quantity": "1",
          "name": "Lucky You",
          "type": "",
          "desc": "",
          "color": "N/A",
          "size": "N/A",
          "lid": true,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a220aa00b2e5f29ff1b3657",
          "year": "2002",
          "quantity": "1",
          "name": "Horizon Of Hope",
          "type": "",
          "desc": "",
          "color": "N/A",
          "size": "N/A",
          "lid": true,
          "liner": false,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a221048b5aaff2a8ab80d96",
          "year": "2002",
          "quantity": "1",
          "name": "Block Party",
          "type": "All American",
          "desc": "Hostess Only",
          "color": "N/A",
          "size": "N/A",
          "lid": false,
          "liner": true,
          "protector": true,
          "accessories": false
        },
        {
          "_id": "5a2208b50810ba29f99e113e",
          "year": "2002",
          "quantity": "1",
          "name": "Mail Basket",
          "type": "",
          "desc": "",
          "color": "N/A",
          "size": "small",
          "lid": true,
          "liner": true,
          "protector": true,
          "accessories": false
        }
      ]
    };
  }
}
</script>

<style lang="scss">
.products {
  padding: 0;
  width: fit-content;
  margin: 0 auto 25px auto;
  background: white;
  border-radius: 5px;
  .card-header {
    padding: 0;
  }
  .full-row {
    width: 100%;
  }
}

.table-header > :first-child,
.product-header > :first-child {
    text-align: right;
    border-left: none;
}

.product-header {
  cursor: pointer;
}

.products > :nth-child(even) {
  background: #eee;
}

.property {
  margin: 0;
  padding: 5px 7px;
  box-sizing: border-box;
  border-left: 1px solid #ccc;
  text-overflow: ellipsis;
  /* Required for text-overflow to do anything */
  white-space: wrap;
  overflow: hidden;
}

.property-n {
  font-family: 'Inconsolata', monospace;
  min-width: 50px;
  text-align: center;
}

.property-s {
  min-width: 50px;
  text-align: center;
}

.property-m {
  min-width: 100px;
  text-align: center;
}

.property-l {
  width: 50%;
  text-align: center;
}

.product-body {
  border-top: 1px solid #ccc;
  padding: 15px;
  text-align: left;
}

.product-body img {
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 15px;
  height: 100px;
  width: 100px;
}

@media (max-width: 576px) {
  .products {
    width: 100%;
  }
}

@media (min-width: 576px) {
  .products {
    width: 90%;
  }
}
</style>
