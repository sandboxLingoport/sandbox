sap.ui.define([
	'sap/ui/model/json/JSONModel'
], function (JSONModel) {
    "use strict";

    return {
        init: function () {
            this.model = new JSONModel({
                taskQueue: [],
                messages: [],
                currentTaskGroupNumber: '',
                currentMessage: '',
                currentActionHistoryList: [],
                showAll: false,
                fileGroupBy: ''
            });
            this.model.setSizeLimit(9999);
            sap.ui.getCore().setModel(this.model, 'TaskQueue');
        },

        retrieveTaskForRepository: function () {
            var that = this;
            var mainModel = sap.ui.getCore().getModel('Main');
            return ModelHelper.sendGetAjaxCall('./data/svc/retrieveTaskQueueList?tsProjectId=' + mainModel.getProperty('/tsProjectId') + '&repositoryId=' + mainModel.getProperty('/repositoryId') + '&take=' + (that.model.getProperty('/showAll') ? '0' : '100')).done(function (data) {
                that.model.setProperty('/taskQueue', data);
            });
        },

        retrieveTaskForRepositoryInBackground: function () {
            var that = this;
            var mainModel = sap.ui.getCore().getModel('Main');
            if(!that.model.getProperty('/showAll')) { // Disable auto refresh for show all
            	ModelHelper.sendGetAjaxCall('./data/svc/retrieveTaskQueueList?tsProjectId=' + mainModel.getProperty('/tsProjectId') + '&repositoryId=' + mainModel.getProperty('/repositoryId') + '&take=' + (that.model.getProperty('/showAll') ? '0' : '100'), true).done(function (data) {
                    that.model.setProperty('/taskQueue', data);
                });
            }
        },

        retrieveTaskMessages: function (taskGroupNumber, taskId) {
            var that = this;
            return ModelHelper.sendGetAjaxCall('./data/svc/retrieveTaskMessages?taskGroupNumber=' + taskGroupNumber).done(function (data) {
            	that.model.setProperty('/currentTaskGroupNumber', taskGroupNumber);
            	var selectedTaskIndex = 0;
                jQuery.each(data, function (index, item) {
                    if(item.taskId === parseInt(taskId)) {
                    	selectedTaskIndex = index;
                    }
                });
                jQuery.each(data, function (index, item) {
                    item.index = index;
                    item.selected = index === selectedTaskIndex;
                    item.name = 'Task ' + item.taskId;
                    item.message = '<pre>' + item.message + '</pre>';
                    if (jQuery.inArray(item.status, ['Success', 'No Change']) !== -1) {
                        item.displayState = 'Success';
                    } else if (jQuery.inArray(item.status, ['Warning']) !== -1) {
                        item.displayState = 'Warning';
                    } else if (jQuery.inArray(item.status, ['Error', 'Cancelled']) !== -1) {
                        item.displayState = 'Error';
                    } else {
                        item.displayState = 'None';
                    }
                    var filePaths = [];
                    jQuery.each(item.files, function(index, file){
                    	if(jQuery.inArray(file.relativePath, filePaths) == -1) {
                    		filePaths.push(file.relativePath);
                    	}
                    });
                    var fileActionGroup = [];
                    jQuery.each(filePaths, function(index, filePath){
                    	var fileActionGroupArray = [];
                    	jQuery.each(item.files, function(index, file){
                        	if(file.relativePath == filePath) {
                        		file.isFirstStep = fileActionGroupArray.length == 0;
                        		fileActionGroupArray.push(file);
                        	}
                        });
                    	fileActionGroup.push({
                    		relativePath: filePath,
                    		fileAction: fileActionGroupArray
                    	});
                    });
                    item.fileActionGroup = fileActionGroup;
                });
                that.model.setProperty('/messages', data);
                that.showTaskMessage(selectedTaskIndex);
            });
        },

        showTaskMessage: function (index) {
            this.model.setProperty('/currentMessage', this.model.getProperty('/messages')[index]);
        },

        cancelTask: function (tasks) {
            return ModelHelper.sendPostAjaxCall('./data/svc/cancelTasks', tasks);
        },
        
        deleteTask: function (tasks) {
            return ModelHelper.sendPostAjaxCall('./data/svc/deleteTasks', tasks);
        }
    };
});
