import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import { Footer } from '@/components/pure/Footer';
import Hero from '@/components/pure/Hero';
import Container from '@mui/material/Container';
import SearchInput from '@/components/pure/SearchInput';
import Box from '@mui/material/Box';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css';
import CardContainer from '@/components/containers/CardContainer';
import AddUserModal from '@/components/containers/AddUserModalContainer';
import EditUserModal from '@/components/containers/EditUserModal';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const inter = Inter({ subsets: ['latin'] })
const toastStyle = {
  background: '#ffd300',
  color: '#1f1f1f',
};

export default function Home() {
  let [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false);
  const [editUserData, setEditUserData] = useState(null);

  const handleFilter = async (lastname) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/api/users/getUserByLastname?lastname=${lastname}`, {
        params: { lastname },
      });
      setUsers(response.data)
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    } finally {
      setIsLoading(false);
    }
  }

  const handleUserByLocation = async (isGba) => {
    try {
      setIsLoading(true);
      const isgbalocation = isGba === "GBA" ? true : false;
      const response = await axios.get(`/api/users/getUsersByLocation?gbalocation=${isgbalocation}`, {
        params: { isGba },
      });
      let result = response.data;
      setUsers(result)
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  }

  const getUsers = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('/api/users/getAllUsers');
      let result = response.data;
      setUsers(result)
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleDeleteUser = async (id) => {
    try {
      await axios.delete(`/api/users/deleteUser?id=${id}`);
      getUsers();
      Toastify({
        text: 'Se elimino el usuario correctamente',
        className: "info",
        style: toastStyle
      }).showToast();

    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleOpenAddUserModal = () => {
    setIsAddUserModalOpen(true);
  };
  
  const handleCloseAddUserModal = () => {
    setIsAddUserModalOpen(false);
  };


  const handleOpenEditUserModal = async (id) => {
    try {
      const res = await axios.get(`/api/users/getUserById?id=${id}`)
      let result = res.data;
      setEditUserData(result);
      setIsEditUserModalOpen(true);
    } catch(err){
      console.error('Error retrieving user:', err);
    }
  };

  const handleCloseEditUserModal = () => {
    setIsEditUserModalOpen(false);
  };

  const handleAddUser = async (val) => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/users/createUser', val);
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    } finally {
      Toastify({
        text: 'Usuario creado exitosamente',
        className: "info",
        style: toastStyle
      }).showToast();
      getUsers()
      setIsLoading(false);
    }
  }

  const handleEditUser = async (val) => {
    let {_id} = val
    setIsLoading(true);
    try {
      const res = await axios.put(`/api/users/updateUser?id=${_id}`, val)
      let result = res.data;
      setEditUserData(result);
    } catch (error) {
      console.error('Error al editar el usuario:', error);
    } finally {
      Toastify({
        text: 'Usuario editado exitosamente',
        className: "info",
        style: toastStyle
      }).showToast();
      setIsEditUserModalOpen(false);
      getUsers();
      setIsLoading(false);
    }
  };

  useEffect( () => {
    getUsers()
  }, [])
  

  return (
    <>
      <Head>
        <title>Sport Club partner Finder</title>
        <meta name="description" content="Find people" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar position="relative" color="secondary">
          <Toolbar>
            <Image
              src="/logo-sport-club.png"
              alt="sport club logo"
              width={150}
              height={60}
              priority
            />
            <Typography variant="h6" color="inherit" noWrap>
              Partner Finder App
            </Typography>
            <div style={{ flex: 1 }} />
            <Button variant="contained"  onClick={handleOpenAddUserModal} endIcon={<AddIcon />}>
              crear usuario
            </Button>
          </Toolbar>
        </AppBar>
      <main className={`${inter.className}`}>
        <Box
          sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
          }}
        >
          <Hero></Hero>
          <Container sx={{ py: 8 }} maxWidth="md">
            <SearchInput
              getGBAFilter={(val) => handleUserByLocation(val)}
              getAllFilter={() => getUsers()}
              onSearch={(val) => handleFilter(val)}
             ></SearchInput>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
              <CircularProgress />
            </Box>
          ) : (
            <CardContainer 
              users={users}
              onDeleteUser={handleDeleteUser}
              onEditUser={(val) => handleOpenEditUserModal(val)} />
           )}
        </Container>
      </main>
      {isAddUserModalOpen && (
        <AddUserModal
          open={isAddUserModalOpen}
          onClose={handleCloseAddUserModal}
          onAddUser={(val) => handleAddUser(val)}
        />
      )}
      {isEditUserModalOpen && (
        <EditUserModal
          open={isEditUserModalOpen}
          onClose={handleCloseEditUserModal}
          onEditUser={handleEditUser}
          userData={editUserData}
        />
      )}
      <Footer></Footer>
    </>
  )
}
