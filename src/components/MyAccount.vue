<template>
  <title-bar title="My Account"></title-bar>
  <form>

    <fieldset class="form-group">
      <label for="formGroupExampleInput">Event Title</label>
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
    </fieldset>
    <fieldset class="form-group">
      <label for="formGroupExampleInput2">Description</label>
      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
    </fieldset>
    <input class="new-date"
    					autofocus autocomplete="off"
    					placeholder="What needs to be done?"
    					v-model="newDate"
    					@keyup.enter="addDate">
    <li
						v-for="date in availableDates">
						<div class="view">
							<input class="toggle" type="checkbox" v-model="todo.completed">
							<label @dblclick="editDate(date)">{{date.date}}</label>
							<button class="destroy" @click="removeDate(date)"></button>
						</div>
						<input class="edit" type="text"
							v-model="date.title"
							@blur="doneEdit(date)"
							@keyup.enter="doneEdit(date)"
							@keyup.esc="cancelEdit(date)">
					</li>
  </form>


</template>

<script>
  import auth from '../auth'

  export default {

    name: 'MyAccount',
    data:{
      dates:[]
    },
    methods: {

			addDate: function () {
				var value = this.newDate && this.newDate.trim()
				if (!value) {
					return;
				}
				this.dates.push({ title: value, completed: false })
				this.newDate = ''
			},

			removeDate: function (date) {
				this.dates.$remove(date)
			},

			editDate: function (date) {
				this.beforeEditCache = date.date
				this.editedTodo = date
			},

			doneDate: function (date) {
				if (!this.editedDate) {
					return;
				}
				this.editedDate = null
				todo.title = date.title.trim()
				if (!date.date) {
					this.removeTodo(date)
				}
			},

			cancelEdit: function (date) {
				this.editedDate = null
				date.date = this.beforeEditCache
			}
		},
    route: {
      // Check the users auth status before
      // allowing navigation to the route
      canActivate () {
        console.log(auth.user.authenticated)
        return true
      }
    },
    components: {
      'title-bar': require('./TitleBar.vue')
    },
    created () {
      console.log(1)
    }
  }
</script>

<style lang="scss" scoped>

</style>
