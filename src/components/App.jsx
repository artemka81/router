import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { BlogPage } from 'pages/BlogPage';
import { SinglePage } from 'pages/SinglePage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { Layout } from './Layout';





export default function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<Navigate to="/about" replace />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="posts" element={<BlogPage />} />
          <Route path="posts/:id" element={<SinglePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
