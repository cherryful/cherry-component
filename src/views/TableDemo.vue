<script setup lang="ts">
import Table from '@/components/base/Table.vue'

const list = [
  {
    id: 1,
    name: 'Alice',
    age: 18,
    email: 'alice@example.com',
    status: 'active',
  },
  {
    id: 2,
    name: 'Bob',
    age: 20,
    email: 'bob@example.com',
    status: 'active',
  },
  {
    id: 3,
    name: 'Cindy',
    age: 22,
    email: 'cindy@example.com',
    status: 'inactive',
  },
]

const bulkActions = [
  {
    name: 'Delete All',
    clicked: (keys: Array<string | number>) => alert(keys),
  },
  {
    name: 'Active',
    clicked: () => {},
  },
]
</script>

<template>
  <div>
    Simpe Table Demo:
    <div class="mt-4 w-2xl">
      <Table :data="list">
        <template #headers>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Name
          </th>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Age
          </th>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Email
          </th>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Status
          </th>
        </template>
        <template #rows="{ row }">
          <td class="w-16 whitespace-nowrap text-center px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.name }}
          </td>
          <td class="w-16 whitespace-nowrap text-center px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.age }}
          </td>
          <td class="w-16 whitespace-nowrap text-center px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.email }}
          </td>
          <td class="w-16 whitespace-nowrap text-center px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.status }}
          </td>
        </template>
      </Table>
    </div>
  </div>
  <div>
    Loading Table Demo:
    <div class="mt-4 w-2xl">
      <Table :data="list" loading>
        <template #headers>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Name
          </th>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Age
          </th>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Email
          </th>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Status
          </th>
        </template>
        <template #rows="{ row }">
          <td class="w-16 whitespace-nowrap text-center px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.name }}
          </td>
          <td class="w-16 whitespace-nowrap text-center px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.age }}
          </td>
          <td class="w-16 whitespace-nowrap text-center px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.email }}
          </td>
          <td class="w-16 whitespace-nowrap text-center px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.status }}
          </td>
        </template>
      </Table>
    </div>
  </div>
  <div>
    Empty Table Demo:
    <div class="mt-4 w-2xl">
      <Table :data="[]">
        <template #headers>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Name
          </th>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Age
          </th>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Email
          </th>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Status
          </th>
        </template>
        <template #rows="{ row }">
          <td class="w-16 whitespace-nowrap text-center px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.name }}
          </td>
          <td class="w-16 whitespace-nowrap text-center px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.age }}
          </td>
          <td class="w-16 whitespace-nowrap text-center px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.email }}
          </td>
          <td class="w-16 whitespace-nowrap text-center px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.status }}
          </td>
        </template>
      </Table>
    </div>
  </div>
  <div>
    Bulk Actions Table Demo:
    <div class="mt-4 w-2xl">
      <Table :data="list" :actions="bulkActions">
        <template #headers>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Name
          </th>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Age
          </th>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Email
          </th>
          <th scope="col" class="py-3.5 px-3 col-span-3 text-sm font-semibold text-gray-900 sm:pl-6">
            Status
          </th>
          <th scope="col" class="px-4 py-3.5 col-span-3 text-sm font-semibold text-gray-900" />
        </template>
        <template #rows="{ row }">
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.name }}
          </td>
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.age }}
          </td>
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.email }}
          </td>
          <td class="w-16 whitespace-nowrap px-3.5 py-2 pl-4 sm:pl-6 text-sm text-gray-500">
            {{ row.status }}
          </td>
          <td class="w-16 whitespace-nowrap px-3.5 py-2 text-md text-gray-500">
            <div class="flex items-center gap-2 lg:px-4">
              <span class="i-mdi:apple inline-block cursor-pointer" />
              <span class="i-mdi:lightning-bolt cursor-pointer" />
              <span class="i-mdi:mail cursor-pointer" />
            </div>
          </td>
        </template>
      </Table>
    </div>
  </div>
</template>
