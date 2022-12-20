
<template>
  <div class="card card-body edit-container">
    <h3>Edit Book</h3>
    <form @submit.prevent="update">
      <div class="form-group">
        <label>Name</label>
        <input v-model="form.name" class="form-control" required />
      </div>

      <div class="form-group mt-3">
        <label>Author</label>
        <input
          v-model="form.author"
          class="form-control"      
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Description</label>
        <input
          v-model="form.desc"
          class="form-control"      
          required
        />
      </div>

      <div class="form-group mt-3">
        <label>Review</label>
        <textarea v-model="form.review" class="form-control" required rows="5" cols="50"></textarea>
      </div>

      <button type="submit" class="btn btn-primary  mt-3">
        Update
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getBook, updateBook } from '@/firebase'

export default {
  name: ' EditApp',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const bookId = computed(() => route.params.id)

    const form = reactive({ name: '', desc: '', author: '', review: '',})
    onMounted(async () => {
      const book = await getBook(bookId.value)
      console.log(book, bookId.value)
      form.name = book.name
      form.desc = book.desc
      form.author = book.author
      form.review = book.review
    })

    const update = async () => {
      await updateBook(bookId.value, { ...form })
      router.push('/')
      form.name = ''
      form.desc = ''
      form.author = ''
      form.review = ''
    }

    return { form, update }
  }
  
}


</script>