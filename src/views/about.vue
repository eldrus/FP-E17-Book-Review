<!-- <template>
    <div class="card mt-4">
      <table class="table m-0">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="{ id, name, desc } in users" :key="id">
            <td>{{ name }}</td>
            <td>{{ desc }}</td>
        
            <td>
              <router-link :to="`/edit/${id}`">
                <button class="btn btn-primary btn-sm me-2">
                  Edit
                </button>
              </router-link>
              <button class="btn btn-danger btn-sm" @click="deleteUser(id)">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { useLoadUsers, deleteUser } from '@/firebase'
  
  export default {
    name: ' AboutAp ',
    setup() {
      const users = useLoadUsers()
      return { users, deleteUser }
    }
  }
   </script> -->


   <template>
  
    <BookList />
  </template>
  
// <script>

import BookList from '@/components/BookList.vue'
export default {
  name: ' AboutAp ',
  components: {  BookList }
}</script>