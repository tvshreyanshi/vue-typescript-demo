<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type Payload = {
    password: string;
    userName: string;
    email: string;
    role: 'SUPER' | 'ADMIN' | 'USER'
}

const form = ref<Payload>({
    password: 'password',
    userName: 'testUser',
    email: 'test-user@gmail.com',
    role: 'SUPER',
});
const router = useRouter();
const onSubmit = async () => {
    try {
        router.push('/');
    } catch(error) {
        console.log(error);
    } finally {

    }
}
</script>

<template>
    <div class="flex flex-col justify-center items-center min-h-screen">
      <div class="mx-auto w-full max-w-md">
        <form @submit.prevent="onSubmit">
          <Card class="overflow-y-auto">
            <CardHeader class="space-y-1">
              <CardTitle class="flex text-2xl justify-center items-center"><u>Create An Account</u></CardTitle>
              <CardDescription> Enter your details below craete Acoount </CardDescription>
            </CardHeader>
            <CardContent class="grid gap-4">
              <div class="grid gap-2">
                <Label for="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="username"
                  v-model="form.userName"
                />
              </div>
              <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  type="text"
                  placeholder="email"
                  v-model="form.email"
                />
              </div>
              <div class="grid gap-2">
                <Label for="username">Role</Label>
                <Input
                  id="role"
                  type="text"
                  placeholder="role"
                  v-model="form.role"
                />
              </div>
              <div class="grid gap-2">
                <Label for="password">Password</Label>
                <Input id="password" type="password" v-model="form.password" />
              </div>
            </CardContent>
            <CardFooter class="flex-col space-y-2">
              <Button class="w-full" type="submit"> Login </Button>
              <p>
                Already have an account?
                <RouterLink
                  to="/auth/login"
                  class="border-b border-gray-500 text-muted-foreground hover:text-primary"
                >
                  Login
                </RouterLink>
              </p>
            </CardFooter>
          </Card>
        </form>
      </div>
    </div>
  </template>