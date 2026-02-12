import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyLiveSleep } from './components/WhyLiveSleep';
import { ProductGrid } from './components/ProductGrid';
import { CategoryPage } from './components/CategoryPage';
import { TailorExclusive } from './components/TailorExclusive';
import { Testimonials } from './components/Testimonials';
import { AboutLiveSleep } from './components/AboutLiveSleep';
import { ShoppingCart, CartItem } from './components/ShoppingCart';
import { Wishlist } from './components/Wishlist';
import { CheckoutPage } from './components/CheckoutPage';
import { Footer } from './components/Footer';
import { Product } from './components/ProductCard';
import { Toaster } from './components/ui/sonner';
import { toast } from 'sonner@2.0.3';

const products: Product[] = [
  {
    id: '1',
    name: 'Premium Memory Foam Mattress',
    category: 'Mattresses',
    price: 45999,
    image: 'https://images.unsplash.com/photo-1606796913825-2b02883605e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aGl0ZSUyMG1hdHRyZXNzJTIwYmVkcm9vbXxlbnwxfHx8fDE3NzA3MjkwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Experience cloud-like comfort with our premium memory foam technology that adapts to your body.',
    rating: 4.8
  },
  {
    id: '2',
    name: 'Luxury Cotton Towel Set',
    category: 'Towels',
    price: 3999,
    image: 'https://images.unsplash.com/photo-1766727923683-8cc366dfe23b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwY290dG9uJTIwdG93ZWxzJTIwYmF0aHJvb218ZW58MXx8fHwxNzcwNzI5MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Ultra-soft 100% Egyptian cotton towels. Set includes 2 bath towels, 2 hand towels, and 2 washcloths.',
    rating: 4.9
  },
  {
    id: '3',
    name: 'Organic Linen Bedsheet Set',
    category: 'Bedsheets',
    price: 7499,
    image: 'https://images.unsplash.com/photo-1606796913825-2b02883605e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVkc2hlZXQlMjBsaW5lbiUyMGJlZHJvb218ZW58MXx8fHwxNzcwNzI5MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Breathable organic linen sheets that get softer with every wash. Includes fitted sheet, flat sheet, and pillowcases.',
    rating: 4.7
  },
  {
    id: '4',
    name: 'Orthopedic Support Mattress',
    category: 'Mattresses',
    price: 54999,
    image: 'https://images.unsplash.com/photo-1759176170879-6bd7073ab4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBmb2FtJTIwbWF0dHJlc3N8ZW58MXx8fHwxNzcwNzI5MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Designed for optimal spinal alignment with advanced pressure relief zones for therapeutic sleep.',
    rating: 4.9
  },
  {
    id: '5',
    name: 'Spa Collection Bath Towels',
    category: 'Towels',
    price: 2999,
    image: 'https://images.unsplash.com/photo-1700918232124-f64da19e73eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRoJTIwdG93ZWxzJTIwc3BhfGVufDF8fHx8MTc3MDcyOTA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Plush spa-quality towels with exceptional absorbency. Available in multiple elegant colors.',
    rating: 4.6
  },
  {
    id: '6',
    name: 'Silk Blend Bedsheet Set',
    category: 'Bedsheets',
    price: 9999,
    image: 'https://images.unsplash.com/photo-1606796913825-2b02883605e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVkc2hlZXQlMjBsaW5lbiUyMGJlZHJvb218ZW58MXx8fHwxNzcwNzI5MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Luxurious silk-cotton blend for temperature regulation and unparalleled smoothness.',
    rating: 4.8
  },
  {
    id: '7',
    name: 'Hybrid Spring Mattress',
    category: 'Mattresses',
    price: 64999,
    image: 'https://images.unsplash.com/photo-1606796913825-2b02883605e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3aGl0ZSUyMG1hdHRyZXNzJTIwYmVkcm9vbXxlbnwxfHx8fDE3NzA3MjkwNDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Perfect balance of support and comfort with individually wrapped coils and memory foam layers.',
    rating: 4.7
  },
  {
    id: '8',
    name: 'Quick Dry Towel Set',
    category: 'Towels',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1766727923683-8cc366dfe23b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwY290dG9uJTIwdG93ZWxzJTIwYmF0aHJvb218ZW58MXx8fHwxNzcwNzI5MDQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Fast-drying microfiber towels perfect for active lifestyles and humid climates.',
    rating: 4.5
  },
  {
    id: '9',
    name: 'Percale Cotton Bedsheets',
    category: 'Bedsheets',
    price: 6499,
    image: 'https://images.unsplash.com/photo-1606796913825-2b02883605e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVkc2hlZXQlMjBsaW5lbiUyMGJlZHJvb218ZW58MXx8fHwxNzcwNzI5MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Crisp, cool percale weave cotton sheets with a classic hotel-quality feel.',
    rating: 4.6
  },
  {
    id: '10',
    name: 'Cooling Gel Mattress',
    category: 'Mattresses',
    price: 49999,
    image: 'https://images.unsplash.com/photo-1759176170879-6bd7073ab4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcnklMjBmb2FtJTIwbWF0dHJlc3N8ZW58MXx8fHwxNzcwNzI5MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Stay cool all night with advanced cooling gel technology and breathable construction.',
    rating: 4.8
  },
  {
    id: '11',
    name: 'Bamboo Towel Collection',
    category: 'Towels',
    price: 3499,
    image: 'https://images.unsplash.com/photo-1700918232124-f64da19e73eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRoJTIwdG93ZWxzJTIwc3BhfGVufDF8fHx8MTc3MDcyOTA0M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Eco-friendly bamboo fiber towels that are naturally antibacterial and hypoallergenic.',
    rating: 4.7
  },
  {
    id: '12',
    name: 'Jersey Knit Bedsheet Set',
    category: 'Bedsheets',
    price: 4499,
    image: 'https://images.unsplash.com/photo-1606796913825-2b02883605e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVkc2hlZXQlMjBsaW5lbiUyMGJlZHJvb218ZW58MXx8fHwxNzcwNzI5MDQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Soft t-shirt material sheets that stretch for a perfect fit and cozy comfort.',
    rating: 4.5
  }
];

export default function App() {
  const [cartItems, setCartItems] = React.useState<CartItem[]>([]);
  const [wishlistItems, setWishlistItems] = React.useState<Product[]>([]);
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('home');

  const handleAddToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      
      if (existingItem) {
        toast.success(`Updated ${product.name} quantity in cart`, {
          description: `Now ${existingItem.quantity + 1} in cart`,
        });
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      toast.success(`Added ${product.name} to cart`, {
        description: 'Continue shopping or checkout',
      });
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleBuyNow = (product: Product) => {
    handleAddToCart(product);
    setCurrentPage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleWishlist = (product: Product) => {
    setWishlistItems(prevItems => {
      const exists = prevItems.find(item => item.id === product.id);
      
      if (exists) {
        toast.info(`Removed ${product.name} from wishlist`);
        return prevItems.filter(item => item.id !== product.id);
      }
      
      toast.success(`Added ${product.name} to wishlist`, {
        description: 'View your wishlist anytime',
      });
      return [...prevItems, product];
    });
  };

  const handleRemoveFromWishlist = (productId: string) => {
    setWishlistItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    toast.success('Item removed from cart');
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      toast.info(`Searching for: ${query}`);
      // In a real app, this would filter products or navigate to search results
    }
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setCurrentPage('checkout');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Render different pages based on currentPage
  const renderPage = () => {
    switch (currentPage) {
      case 'mattresses':
        return (
          <CategoryPage
            category="Mattresses"
            products={products}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onBuyNow={handleBuyNow}
            wishlistItems={wishlistItems}
          />
        );
      case 'towels':
        return (
          <CategoryPage
            category="Towels"
            products={products}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onBuyNow={handleBuyNow}
            wishlistItems={wishlistItems}
          />
        );
      case 'bedsheets':
        return (
          <CategoryPage
            category="Bedsheets"
            products={products}
            onAddToCart={handleAddToCart}
            onToggleWishlist={handleToggleWishlist}
            onBuyNow={handleBuyNow}
            wishlistItems={wishlistItems}
          />
        );
      case 'checkout':
        return (
          <CheckoutPage
            cartTotal={cartTotal}
            itemCount={totalItems}
            onBackToShopping={() => handleNavigate('home')}
          />
        );
      case 'why-livesleep':
        return (
          <>
            <WhyLiveSleep />
            <Testimonials />
            <AboutLiveSleep />
          </>
        );
      case 'about':
        return <AboutLiveSleep />;
      case 'home':
      default:
        return (
          <>
            <Hero />
            <WhyLiveSleep />
            <ProductGrid 
              products={products} 
              onAddToCart={handleAddToCart}
              onToggleWishlist={handleToggleWishlist}
              onBuyNow={handleBuyNow}
              wishlistItems={wishlistItems}
            />
            <TailorExclusive />
            <Testimonials />
            <AboutLiveSleep />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/20 to-pink-50/20">
      <Header 
        cartItemsCount={totalItems}
        wishlistCount={wishlistItems.length}
        onCartClick={() => setIsCartOpen(true)}
        onWishlistClick={() => setIsWishlistOpen(true)}
        onSearch={handleSearch}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />
      {renderPage()}
      {currentPage !== 'checkout' && <Footer />}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={handleCheckout}
      />
      <Wishlist
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistItems={wishlistItems}
        onRemoveItem={handleRemoveFromWishlist}
        onAddToCart={handleAddToCart}
      />
      <Toaster position="bottom-right" richColors />
    </div>
  );
}
