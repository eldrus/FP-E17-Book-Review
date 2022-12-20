<template>
  <div class="card" style="width: 18rem; margin-top: 80px;">
     <div class="card-header">
        <h1>{{form.name}}</h1>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Author</b> : {{form.author}}</li>
        <li class="list-group-item"><b>Description</b> : {{form.desc}}</li>
        <li class="list-group-item"><b>Review</b> : {{form.review}}</li>
        
      </ul>
      
  </div>
  
  <button class="btn btn-solid-lg" style="background-color: #42b983; border-radius: 10px; width: 10%; margin-top: 20px;" href="#services"><a href="/about">back</a> </button>
  
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute} from 'vue-router'
import { getBook} from '@/firebase'

export default {
  name: ' ReviewApp',
  data() {
    return {
        buku : [],
    }
  },
  setup() {
    const route = useRoute()
    const bookId = computed(() => route.params.id)

    const form = reactive({ name: '', desc: '', author: '', review: ''})
    onMounted(async () => {
      const book = await getBook(bookId.value)
      console.log(book, bookId.value)
      form.name = book.name
      form.desc = book.desc
      form.author = book.author
      form.review = book.review
    })

    return { form }
  }
  
}

  
</script>



