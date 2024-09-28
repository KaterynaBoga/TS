interface PersonWithDynamicProps {
    name: string;
    [key: string]: string | number;
}
