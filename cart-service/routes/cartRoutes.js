const express = require("express");
const router = express.Router();
const cartController = require("../controllers/cartController");

router.get("/:userId", cartController.getCart);
router.post("/", cartController.addItem);
router.put("/:cartId/item/:itemId", cartController.updateItem);
router.delete("/:cartId/item/:itemId", cartController.removeItem);
router.delete("/clear/:userId", cartController.clearCart);

module.exports = router;
