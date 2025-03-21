<script setup>
import { ref } from 'vue';
import { useLayout } from '@/layout/composables/layout';

// const menu = ref(null);
// const contextMenu = ref(null);

const nestedMenuitems = ref([
    {
        label: 'Customers',
        // icon: 'pi pi-fw pi-table',
        items: [
            {
                label: 'New',
                // icon: 'pi pi-fw pi-user-plus',
                items: [
                    {
                        label: 'Customer'
                        // icon: 'pi pi-fw pi-plus'
                    },
                    {
                        label: 'Duplicate'
                        // icon: 'pi pi-fw pi-copy'
                    }
                ]
            },
            {
                label: 'Edit'
                // icon: 'pi pi-fw pi-user-edit'
            }
        ]
    },
    {
        label: 'Orders',
        // icon: 'pi pi-fw pi-shopping-cart',
        items: [
            {
                label: 'View'
                // icon: 'pi pi-fw pi-list'
            },
            {
                label: 'Search'
                // icon: 'pi pi-fw pi-search'
            }
        ]
    },
    {
        label: 'Shipments',
        // icon: 'pi pi-fw pi-envelope',
        items: [
            {
                label: 'Tracker'
                // icon: 'pi pi-fw pi-compass'
            },
            {
                label: 'Map'
                // icon: 'pi pi-fw pi-map-marker'
            },
            {
                label: 'Manage'
                // icon: 'pi pi-fw pi-pencil'
            }
        ]
    },
    {
        label: 'Profile',
        // icon: 'pi pi-fw pi-user',
        items: [
            {
                label: 'Settings'
                // icon: 'pi pi-fw pi-cog'
            },
            {
                label: 'Billing'
                // icon: 'pi pi-fw pi-file'
            }
        ]
    },
    {
        label: 'Quit'
        // icon: 'pi pi-fw pi-sign-out'
    }
]);

const { toggleMenu } = useLayout();
</script>

<template>
    <div class="layout-topbar-second">
        <div class="layout-topbar-second-logo-container">
            <button class="layout-second-menu-button layout-topbar-second-action" @click="toggleMenu">
                <i class="pi pi-bars"></i>
            </button>
        </div>
        <div class="layout-topbar-second-actions">
            <Menubar :model="nestedMenuitems" class="layout-topbar-second-menu">
                <template #end>
                    <div class="layout-topbar-second-menu-content">
                        <IconField iconPosition="left" class="layout-topbar-second-action">
                            <!-- <InputIcon class="pi pi-search" />
                            <InputText type="text" placeholder="Search" /> -->
                        </IconField>
                    </div>
                </template>
            </Menubar>
        </div>
    </div>
</template>
<style scoped>
.p-menubar {
    background: none !important;
    border: none !important;
    border-radius: 0 !important;
    padding: 0 !important; /* jika ingin mempertahankan padding */
    gap: var(--p-menubar-gap) !important; /* jika ingin mempertahankan gap */
    color: inherit !important; /* sesuaikan jika perlu */
}

.p-menubar-item:not(p-disabled) > .p-menubar-item-content:hover {
    background: none;
}
</style>
