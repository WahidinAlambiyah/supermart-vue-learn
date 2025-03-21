<template>
    <div>
      <!-- First Topbar: Can be used for notifications or secondary info -->
      <div class="bg-gray-800 text-white px-4 py-2">
        <div class="container mx-auto flex justify-between items-center">
          <div class="text-sm">
            Welcome, User!
          </div>
          <div class="text-sm">
            <!-- Additional info, e.g., contact details or language switcher -->
            Contact us: support@example.com
          </div>
        </div>
      </div>
      
      <!-- Second Topbar: Primary navigation using PrimeVue Menubar -->
      <div class="bg-blue-600 text-white px-4 py-3">
        <div class="container mx-auto">
          <p-menubar :model="menuItems" class="bg-transparent text-white" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import Menubar from 'primevue/menubar';
  
  // Define the navigation menu items.
  const menuItems = ref([
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      command: () => { console.log('Home clicked'); }
    },
    {
      label: 'About',
      icon: 'pi pi-fw pi-info-circle',
      command: () => { console.log('About clicked'); }
    },
    {
      label: 'Services',
      icon: 'pi pi-fw pi-cog',
      items: [
        { label: 'Consulting', command: () => { console.log('Consulting clicked'); } },
        { label: 'Development', command: () => { console.log('Development clicked'); } }
      ]
    },
    {
      label: 'Contact',
      icon: 'pi pi-fw pi-envelope',
      command: () => { console.log('Contact clicked'); }
    }
  ]);
  </script>
  
  <style scoped>
  /* You can add additional custom CSS here if needed */
  </style>
  