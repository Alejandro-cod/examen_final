<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Mi Tienda</a>
        <div class="d-flex">
          <router-link to="/products" class="btn btn-outline-light me-2">
            <i class="bi bi-list"></i> Productos
          </router-link>
          <router-link to="/products/new" class="btn btn-outline-light">
            <i class="bi bi-plus-lg"></i> Nuevo
          </router-link>
        </div>
      </div>
    </nav>

    <main class="container my-4">
      <router-view />
    </main>
  </div>
</template>

<script>
export default { name: 'App' }
</script>

<style>
body { background: #f7f9fc; }
</style>
