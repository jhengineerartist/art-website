// Scroll utility function
export function scrollToSection(sectionId: string) {
  const navbar = document.getElementById("navbar");
  const navbarHeight = navbar ? navbar.clientHeight : 0;

  const section = document.getElementById(sectionId);
  if (section) {
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionPosition - navbarHeight,
      behavior: "smooth",
    });
  }
}
