<template>
  <div>
  <h2>TEST1</h2>
   <p> Input:<input v-model="input_text" @keyup="sort_list"></p>
   <h3>Sorted list:</h3>
   <v-row v-for="item in sorted_list.slice(0,10)">
     <v-col> <p>name: {{ item }}</p></v-col>
   </v-row>
  </div>

</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { matchSorter } from 'match-sorter';
import { onRenderTracked } from 'vue';

@Component
export default class App extends Vue {

  public input_text: string = "123";
  public sorted_list: string[] = [];
  const input_items = [
  { id: 1, name: '1Book' },
  { id: 2, name: '1Pencil' },
  { id: 3, name: '1Apple' },
  { id: 4, name: '1Notebook' },
  { id: 5, name: '1Pen' },
  { id: 6, name: '1Banana' },
  { id: 7, name: '1Eraser' },
  { id: 8, name: '1Orange' },
  { id: 9, name: '1Marker' },
  { id: 10, name: '1Laptop' },
  { id: 11, name: '1231Backpack' },
  { id: 12, name: '12313Avocado' },
  { id: 1001, name: 'Backpack' },
  { id: 1002, name: 'Avocado' }
  ];
  
  public sort_list() {
    let list_name: string[] = [];
    for (let item of this.input_items) {
      if (item.name.includes(this.input_text)) {
        list_name.push(item.name);
      }
    }
    this.sorted_list = list_name.sort();
  }
  
}
</script>