<template>
    <div>
        <b-container>
            <b-row class="mt-4">
                <b-col sm="4"
                       v-for="food in listFoods" :key="food.id"
                       class="mb-5 food-item"
                       @click="showModal(food.id)"
                >
                    <b-card
                            :img-src="food.image"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                    >
                        <b-card-text>
                            {{ food.name }}
                        </b-card-text>
                        <p class="m-0">
                            {{ food.cost }}$
                        </p>
                        <p class="m-0"
                           :class="{ 'stocking-color' : food.status === 1, 'out-of-stock' : food.status === 0 }"
                        >
                            {{ food.status === 1 ? 'Còn hàng' : 'Hết hàng' }}
                        </p>
                    </b-card>
                </b-col>
            </b-row>
        </b-container>
        <b-modal ref="my-modal" size="lg" hide-footer title="FOODS">
            <div class="d-block text-center">
                <b-row>
                    <b-col sm="6">
                        <b-img :src="imgFood"
                               thumbnail
                               fluid
                               alt="Responsive image"
                        >
                        </b-img>
                    </b-col>
                    <b-col sm="6"
                           class="mt-5"
                    >
                        <p>{{ nameFood }}</p>
                        <p>{{ costFood }}$</p>
                        <p class="m-0"
                           :class="{ 'stocking-color' : statusFood === 1, 'out-of-stock' : statusFood === 0 }"
                        >
                            {{ statusFood === 1 ? 'Còn hàng' : 'Hết hàng' }}
                        </p>
                    </b-col>
                </b-row>
                <b-button
                        v-show="statusFood === 1"
                        class="mt-4"
                        variant="danger"
                >
                    {{ buy }}
                </b-button>
            </div>
        </b-modal>
    </div>
</template>
<script>
  export default {
    data: function () {
      return {
        nameFood: '',
        costFood: '',
        imgFood: '',
        statusFood: '',
        buy: 'Mua'
      }
    },
    computed: {
      listFoods: {
        get: function () {
          return this.$store.getters.listFoods
        }
      },
      oneFoods: {
        get: function () {
          return this.$store.getters.oneFoods
        }
      }
    },
    created: function () {
      this.$store.dispatch('getFoods')
    },
    methods: {
      showModal: function (id) {
        this.$store.dispatch('getOneFoods', id).then(() => {
          this.$refs['my-modal'].show()
          this.nameFood = this.oneFoods.name
          this.costFood = this.oneFoods.cost
          this.imgFood = this.oneFoods.image
          this.statusFood = this.oneFoods.status
        })
      }
    }
  }
</script>
