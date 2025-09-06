const express = require("express");
const router = express.Router();
const notificationController = require("../controllers/notificationController");

router.post("/", notificationController.createNotification);
router.get("/user/:userId", notificationController.getNotificationsByUser);
router.put("/read/:id", notificationController.markAsRead);
router.delete("/:id", notificationController.deleteNotification);

module.exports = router;
