import React, { useEffect, useState } from 'react';
import MyContext from './MyContext';
import { Timestamp, addDoc, collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { fireDB } from '../../firebase/FirebaseConfig';

function MyState(props) {
    // State for managing theme mode (light/dark)
    const [mode, setMode] = useState('light');

    // State to show loading while fetching or processing data
    const [loading, setLoading] = useState(false);

    // State to manage the product being added or edited
    const [products, setProducts] = useState({
        title: null,
        price: null,
        imageUrl: null,
        category: null,
        description: null,
        time: Timestamp.now(), // Timestamp for when the product is created or updated
        date: new Date().toLocaleString("en-US", { // Formatting date
            month: "short",
            day: "2-digit",
            year: "numeric",
        })
    });

    // State to hold the list of products
    const [product, setProduct] = useState([]);

    // State to hold the list of orders
    const [order, setOrder] = useState([]);

    // State to hold the list of users
    const [user, setUser] = useState([]);

    // State to hold the list of unique product categories
    const [categories, setCategories] = useState([]);

    // States for search and filter functionality
    const [searchkey, setSearchkey] = useState('');
    const [filterType, setFilterType] = useState('');
    const [filterPrice, setFilterPrice] = useState('');

    // States to keep track of counts for admin, users, and categories
    const [adminCount, setAdminCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [categoryCount, setCategoryCount] = useState(0);

    // Function to toggle between light and dark mode
    const toggleMode = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "rgb(17, 24, 39)";
        } else {
            setMode('light');
            document.body.style.backgroundColor = "white";
        }
    };

    // Function to add a new product to Firestore
    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
            return toast.error("All fields are required");
        }

        setLoading(true);

        try {
            const productRef = collection(fireDB, 'products');
            await addDoc(productRef, products);
            toast.success("Product added successfully");

            // Redirect to dashboard after adding a product
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 800);

            getProductData(); // Refresh the product data
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    // Function to fetch product data from Firestore
    const getProductData = async () => {
        setLoading(true);

        try {
            const q = query(
                collection(fireDB, 'products'),
                orderBy('time') // Order products by time
            );

            const data = onSnapshot(q, (QuerySnapshot) => {
                let productArray = [];
                let categoriesSet = new Set();
                QuerySnapshot.forEach((doc) => {
                    const docData = doc.data();
                    productArray.push({ ...docData, id: doc.id });
                    if (docData.category) {
                        categoriesSet.add(docData.category); // Collect unique categories
                    }
                });
                setProduct(productArray); // Update product state
                setCategories(Array.from(categoriesSet)); // Update categories state
                setCategoryCount(categoriesSet.size); // Update category count
                setLoading(false);
            });

            return () => data;
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    // Function to set the product data for editing
    const edithandle = (item) => {
        setProducts(item);
    };

    // Function to update a product in Firestore
    const updateProduct = async () => {
        setLoading(true);
        try {
            await setDoc(doc(fireDB, 'products', products.id), products);
            toast.success("Product updated successfully");

            // Redirect to dashboard after updating a product
            setTimeout(() => {
                window.location.href = '/dashboard';
            }, 800);

            getProductData(); // Refresh the product data
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    // Function to delete a product from Firestore
    const deleteProduct = async (item) => {
        setLoading(true);
        try {
            await deleteDoc(doc(fireDB, 'products', item.id));
            toast.success('Product deleted successfully');
            getProductData(); // Refresh the product data
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    // Function to fetch order data from Firestore
    const getOrderData = async () => {
        setLoading(true);
        try {
            const result = await getDocs(collection(fireDB, "order"));
            const ordersArray = [];
            result.forEach((doc) => {
                ordersArray.push(doc.data());
            });
            setOrder(ordersArray); // Update order state
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    // Function to fetch user data from Firestore
    const getUserData = async () => {
        setLoading(true);
        try {
            const result = await getDocs(collection(fireDB, "users"));
            const usersArray = [];
            let adminCount = 0;
            result.forEach((doc) => {
                const userData = doc.data();
                usersArray.push(userData);
                if (userData.role === 'admin') {
                    adminCount++; // Count admin users
                }
            });
            setUser(usersArray); // Update user state
            setUserCount(usersArray.length); // Update user count
            setAdminCount(adminCount); // Update admin count
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    // UseEffect to fetch data on component mount
    useEffect(() => {
        getProductData(); // Fetch product data
        getOrderData(); // Fetch order data
        getUserData(); // Fetch user data
    }, []);

    return (
        <MyContext.Provider value={{
            mode, toggleMode, loading, setLoading,
            products, setProducts, addProduct, product,
            edithandle, updateProduct, deleteProduct, order,
            user, searchkey, setSearchkey, filterType, setFilterType,
            filterPrice, setFilterPrice, adminCount, userCount, categoryCount
        }}>
            {props.children}
        </MyContext.Provider>
    );
}

export default MyState;
