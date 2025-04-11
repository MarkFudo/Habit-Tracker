import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 2,
        flexDirection: { xs: 'column', md: 'row' }
      }}
    >
      <Typography variant="body2" sx={{ order: { xs: 2, md: 1 }, mt: { xs: 2, md: 0 } }}>
        &copy; Freivel Hirujo, 2025.
      </Typography>
      <Box sx={{ order: { xs: 1, md: 2 } }}>
        <Link
          href="https://www.linkedin.com/in/freivelhirujo/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ px: 2, '&:hover': { textDecoration: 'underline' } }}
        >
          Linkedin
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;