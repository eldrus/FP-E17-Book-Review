<template>
  <div id="search">
    <input v-model="search" placeholder="Search"/>
  </div>
  <br>
    <div class="card booklist-container">
      <table class="table m-0">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Description</th>
            <th scope="col">Review</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="book in filteredBooks" :key="book.id">
            <td>{{ book.name }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.desc }}</td>

            <td>
              <router-link :to="`/review/${book.id}`">
                <button class="btn btn-success btn-sm me-2">
                  Detail
                </button>
              </router-link>
            </td>
            
            <td>
              <router-link :to="`/edit/${book.id}`">
                <button class="btn btn-primary btn-sm me-2">
                  Edit
                </button>
              </router-link>
              <button class="btn btn-danger btn-sm" @click="deleteBook(book.id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { useLoadBook, deleteBook } from '@/firebase'
  
  export default {
    data() {
      return {
        search:''
      }
    },
    setup() {
      const books = useLoadBook()
      return { books, deleteBook }
    },
    computed:{
      filteredBooks(){
        return this.books.filter(book => book.name.toLowerCase().includes(this.search.toLowerCase()))
      }
    }
  }
</script>

<style>
  #search{
    float: right;
    margin-top: 60px;
  }
</style>