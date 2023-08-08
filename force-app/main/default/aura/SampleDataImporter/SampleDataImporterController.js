({
    importData: function (component, event, helper) {
        //调用apex后台的方法
        var action = component.get('c.importSampleData');
        component.set('v.showSpinner', true);
        action.setCallback(this, function (response) {
            component.set('v.showSpinner', false);
            var state = response.getState();
            if (state === 'SUCCESS') {
                //进行展示
                component.find('notifLib').showToast({
                    variant: 'success',
                    header: 'Success',
                    message: 'Sample data successfully imported.'
                });
            } else {
                console.log(response.getError());
                component.find('notifLib').showToast({
                    variant: 'error',
                    header: 'Error',
                    message: 'Sample data import failed.'
                });
            }
        });
        $A.enqueueAction(action);
    }
});
