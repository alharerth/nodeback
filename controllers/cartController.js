const Cart = require("../models/cartModel");

const addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;
        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            cart = new Cart({ user: userId, products: [] });
        }

        const existingProduct = cart.products.find(p => p.product.toString() === productId);
        if (existingProduct) {
            existingProduct.quantity += quantity;
        } else {
            cart.products.push({ product: productId, quantity });
        }

        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { addToCart };
